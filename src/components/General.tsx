import React from "react";
import Routes from "../containers/Routers";
import AuthPage from "./AuthPage";
import WorkShift from "./WorkShift";
import { Problem } from "../types/Car";
import { AsyncStorage } from "react-native";
import jwt_decoded from "jwt-decode";
import { Info } from "../types/UserInfo";

interface GeneralProps {
  authorized: boolean;
  getValueOil: () => void;
  loginSuccess: (info: Info) => void;
  logout: () => void;
}

const General: React.FunctionComponent<GeneralProps> = ({
  authorized,
  getValueOil,
  logout,
  loginSuccess,
}) => {
  const [isShift, setShift] = React.useState<boolean>(false);

  React.useEffect(() => {
    getValueOil();
  }, []);

  const checkToken = async () => {
    console.log("hello");
    try {
      const value = await AsyncStorage.getItem("TOKEN");
      if (value !== null) {
        const decoded: any = jwt_decoded(value);
        loginSuccess({
          id: decoded.userId,
          name: decoded.name,
          login: decoded.login,
        });
      }
    } catch (e) {
      console.log("Ошибка проверки токена");
    }
  };

  React.useEffect(() => {
    checkToken();
  }, []);

  const handleStartShift = () => {
    setShift(true);
  };

  const handleStopShift = () => {
    setShift(false);
  };

  return authorized ? (
    isShift ? (
      <Routes handleStopShift={handleStopShift} />
    ) : (
      <WorkShift handleStartShift={handleStartShift} logout={logout} />
    )
  ) : (
    <AuthPage />
  );
};

export default General;
