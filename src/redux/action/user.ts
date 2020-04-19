import { urlUser } from "./../../const/index";
import { Info } from "../../types/UserInfo";
import { AppActionsType } from "../../types/action";
import { Dispatch } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export enum LoginActions {
  LOGIN_BEGIN = "LOGIN_BEGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURI = "LOGIN_FAILURI",
}

export const loginBegin = (): AppActionsType => {
  return { type: LoginActions.LOGIN_BEGIN };
};

export const loginSuccess = (payload: Info): AppActionsType => {
  return { type: LoginActions.LOGIN_SUCCESS, payload };
};

export const loginFailure = (error: any): AppActionsType => {
  return { type: LoginActions.LOGIN_FAILURI, error };
};

export const userAuthorize = (login: string, password: string) => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(loginBegin());
    return axios
      .post(urlUser, { login, password })
      .then((res) => {
        async () => {
          try {
            await AsyncStorage.setItem("token", res.data.token);
            return console.log("Токен записан");
          } catch (e) {
            console.log("Ошибка записи");
          }
        };
        return dispatch(
          loginSuccess({
            id: res.data.userId,
            name: res.data.name,
            login: res.data.login,
          })
        );
      })
      .catch((error) => {
        return dispatch(loginFailure(error.response.data.message));
      });
  };
};
