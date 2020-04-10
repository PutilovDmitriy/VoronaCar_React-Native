import { urlCar } from "./../../const/index";
import { Car } from "./../../types/Car";
import { AppActionsType } from "../../types/action";
import { Dispatch } from "react";

export enum CarActions {
  CAR_BEGIN = "CAR_BEGIN",
  CAR_SUCCESS = "CAR_SUCCESS",
  CAR_FAILURI = "CAR_FAILURI"
}

export const carBegin = (): AppActionsType => {
  return { type: CarActions.CAR_BEGIN };
};

export const carSuccess = (payload: Car[]): AppActionsType => {
  return { type: CarActions.CAR_SUCCESS, payload };
};

export const carFailure = (error: any): AppActionsType => {
  return { type: CarActions.CAR_FAILURI, error };
};

export const getCarInfo = () => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(carBegin());
    let url = urlCar;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          dispatch(carFailure(404));
        } else dispatch(carSuccess(data));
        return data;
      });
  };
};
