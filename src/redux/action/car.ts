import axios from "axios";
import { urlCar, urlVorona } from "./../../const/index";
import { Car, ProblemKey } from "./../../types/Car";
import { AppActionsType } from "../../types/action";
import { Dispatch } from "react";

export enum CarActions {
  CAR_BEGIN = "CAR_BEGIN",
  CAR_SERVICE_BEGIN = "CAR_SERVICE_BEGIN",
  CAR_SUCCESS = "CAR_SUCCESS",
  CAR_FAILURI = "CAR_FAILURI",
  CAR_UPDATE = "CAR_UPDATE",
}

export const carBegin = (): AppActionsType => {
  return { type: CarActions.CAR_BEGIN };
};

export const carServiceBegin = (): AppActionsType => {
  return { type: CarActions.CAR_SERVICE_BEGIN };
};

export const carSuccess = (payload: Car[]): AppActionsType => {
  return { type: CarActions.CAR_SUCCESS, payload };
};

export const carFailure = (error: any): AppActionsType => {
  return { type: CarActions.CAR_FAILURI, error };
};

export const carUpdate = (payload: Car): AppActionsType => {
  return { type: CarActions.CAR_UPDATE, payload };
};

export const getCarInfo = () => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(carBegin());
    const url = urlCar + "/info";
    return fetch(url)
      .then((response) => response.json())
      .then((res) => {
        return dispatch(carSuccess(res));
      })
      .catch((error) => {
        return dispatch(carFailure(error));
      });
  };
};

export const serviceCar = (number: string, problems: ProblemKey[]) => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(carServiceBegin());
    const url = urlCar + "/services";
    return axios
      .put(url, { number, problems })
      .then((res) => {
        return dispatch(carUpdate(res.data.info));
      })
      .catch((error) => {
        return dispatch(carFailure(error.response.data.message));
      });
  };
};
