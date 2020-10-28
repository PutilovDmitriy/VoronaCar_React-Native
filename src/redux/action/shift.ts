import axios from "axios";
import { AppActionsType } from "./../../types/action";
import { ShiftUpdateInfo } from "../../types/Shift";
import { Dispatch } from "react";
import { urlShift } from "../../const";
import { AsyncStorage } from "react-native";

export enum ShiftActions {
  SHIFT_BEGIN = "SHIFT_BEGIN",
  SHIFT_START = "SHIFT_START",
  SHIFT_UPDATE = "SHIFT_UPDATE",
  SHIFT_FINISH = "SHIFT_FINISH",
  SHIFT_FAILURI = "SHIFT_FAILURI",
}

export const shiftBegin = (): AppActionsType => ({
  type: ShiftActions.SHIFT_BEGIN,
});

export const shiftStart = (payload: string): AppActionsType => ({
  type: ShiftActions.SHIFT_START,
  payload,
});

export const shiftUpdate = (payload: ShiftUpdateInfo): AppActionsType => ({
  type: ShiftActions.SHIFT_UPDATE,
  payload,
});

export const shiftFinish = (): AppActionsType => ({
  type: ShiftActions.SHIFT_FINISH,
});

export const shiftFailuri = (payload: any): AppActionsType => ({
  type: ShiftActions.SHIFT_FAILURI,
  payload,
});

export const startShift = (userId: string) => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(shiftBegin());
    const url = urlShift + "/start";
    return axios
      .post(url, { userId: userId })
      .then((res) => {
        AsyncStorage.setItem("SHIFT_ID", res.data.id);
        return dispatch(shiftStart(res.data.id));
      })
      .catch((error) => {
        dispatch(shiftFailuri(error.response.data.message));
      });
  };
};

export const updateShift = (info: ShiftUpdateInfo) => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(shiftBegin());
    const url = urlShift + "/update";
    return axios
      .put(url, info)
      .then((res) => {
        return dispatch(shiftUpdate(info));
      })
      .catch((error) => {
        dispatch(shiftFailuri(error.response.data.message));
      });
  };
};

export const finishShift = (shiftId: string) => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(shiftBegin());
    const url = urlShift + "/finish";
    return axios
      .put(url, { shiftId })
      .then((res) => {
        return dispatch(shiftFinish());
      })
      .catch((error) => {
        dispatch(shiftFailuri(error.response.data.message));
      });
  };
};
