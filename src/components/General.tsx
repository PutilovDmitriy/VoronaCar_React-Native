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
  shiftId: string;
  shiftFinish: (shiftId: string) => void;
  setShiftId: (shiftId: string) => void;
}

const General: React.FunctionComponent<GeneralProps> = ({
  authorized,
  getValueOil,
  loginSuccess,
  shiftFinish,
  shiftId,
  setShiftId,
  logout
}) => {
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
      }
    } catch (e) {
      console.log("Ошибка проверки shiftId");
    }
  };

  const handlerLogout = async () => {
    try {
      await AsyncStorage.removeItem("TOKEN");
      const value = await AsyncStorage.getItem("TOKEN");
      if (value == null) {
        console.log("Токен удален");
        return logout();
      }
    } catch (e) {
      return console.log("Выход не удался");
    }
  };

  React.useEffect(() => {
    checkToken();
    checkShiftId();
  }, []);

  const handleStopShift = async () => {
    try {
      await AsyncStorage.removeItem("SHIFT_ID");
      const value = await AsyncStorage.getItem("SHIFT_ID");
      if (value == null) {
        console.log("ShiftId удален");
        return shiftFinish(shiftId);
      }
    } catch (e) {
      return console.log("Завершение смены не удалось");
    }
  };

  return authorized ? (
    <Routes handleStopShift={handleStopShift} handlerLogout={handlerLogout}/>
  ) : (
    <AuthPage />
  );
};

export default General;
