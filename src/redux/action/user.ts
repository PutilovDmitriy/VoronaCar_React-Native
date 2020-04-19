import { urlUser } from "./../../const/index";
import { Info } from "../../types/UserInfo";
import { AppActionsType } from "../../types/action";
import { Dispatch } from "react";
import axios from "axios";
import { AsyncStorage } from "react-native";
export enum LoginActions {
  LOGIN_BEGIN = "LOGIN_BEGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_LOGOUT = "LOGIN_LOGOUT",
  LOGIN_FAILURI = "LOGIN_FAILURI",
}

export const loginBegin = (): AppActionsType => ({
  type: LoginActions.LOGIN_BEGIN,
});

export const loginSuccess = (payload: Info): AppActionsType => ({
  type: LoginActions.LOGIN_SUCCESS,
  payload,
});

export const loginLogout = (): AppActionsType => ({
  type: LoginActions.LOGIN_LOGOUT,
});

export const loginFailure = (error: any): AppActionsType => ({
  type: LoginActions.LOGIN_FAILURI,
  error,
});

export const userAuthorize = (login: string, password: string) => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(loginBegin());
    return axios
      .post(urlUser, { login, password })
      .then((res) => {
        AsyncStorage.setItem("TOKEN", res.data.token);
        console.log("Токен установлен");
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
