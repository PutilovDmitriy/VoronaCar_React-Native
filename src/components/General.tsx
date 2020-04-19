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
  userId: string;
  shiftStart: (userId: string) => void;
  shiftId: string;
  shiftFinish: (shiftId: string) => void;
  setShiftId: (shiftId: string) => void;
}

const General: React.FunctionComponent<GeneralProps> = ({
  authorized,
  getValueOil,
  logout,
  loginSuccess,
  shiftStart,
  userId,
  shiftFinish,
  shiftId,
  setShiftId,
}) => {
  const [isShift, setShift] = React.useState<boolean>(false);

  React.useEffect(() => {
    getValueOil();
  }, []);

  const checkToken = async () => {
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

  const checkShiftId = async () => {
    try {
      const value = await AsyncStorage.getItem("SHIFT_ID");
      console.log("shiftID = " + value);
      if (value !== null) {
        setShiftId(value);
        setShift(true);
      }
    } catch (e) {
      console.log("Ошибка проверки shiftId");
    }
  };

  React.useEffect(() => {
    checkToken();
    checkShiftId();
  }, []);

  const handleStartShift = () => {
    shiftStart(userId);
    setShift(true);
  };

  const handleStopShift = async () => {
    try {
      await AsyncStorage.removeItem("SHIFT_ID");
      const value = await AsyncStorage.getItem("SHIFT_ID");
      if (value == null) {
        console.log("ShiftId удален");
        setShift(false);
        return shiftFinish(shiftId);
      }
    } catch (e) {
      return console.log("Завершение смены не удалось");
    }
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
