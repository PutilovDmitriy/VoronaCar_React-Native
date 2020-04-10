import { urlUser } from "./../../const/index";
import { Info } from "./../../types/Info";
import { UserLog } from "./../../types/UserLog";
import { AppActionsType } from "../../types/action";
import { Dispatch } from "react";

export enum LoginActions {
  LOGIN_BEGIN = "LOGIN_BEGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURI = "LOGIN_FAILURI"
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

export const userAuthorize = (userLog: UserLog) => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(loginBegin());
    let url =
      urlUser + "?login=" + userLog.login + "&password=" + userLog.password;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          dispatch(loginFailure(404));
        } else dispatch(loginSuccess(data[0]));
        return data;
      });
  };
};
