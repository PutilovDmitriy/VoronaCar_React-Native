import { Info } from "./../../types/Info";
import { urlCar, urlVorona } from "./../../const/index";
import { Car, Problem } from "./../../types/Car";
import { AppActionsType } from "../../types/action";
import { Dispatch } from "react";

export enum CarActions {
  CAR_BEGIN = "CAR_BEGIN",
  CAR_SUCCESS = "CAR_SUCCESS",
  CAR_FAILURI = "CAR_FAILURI",
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
    return fetch(urlCar)
      .then((response) => response.json())
      .then((res) => {
        return dispatch(carSuccess(res));
      })
      .catch((error) => {
        return dispatch(carFailure(error));
      });
  };
};

// export const updateCarInfo = (number: number, problems: Problem[]) => {
//   return (dispatch: Dispatch<AppActionsType>) => {
//     dispatch(carBegin());
//     const url = urlCar + "/services";
//     return fetch(url, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify({ number, problems }),
//     })
//       .then((response) => response.json())
//       .then((res) => {
//         return dispatch(carSuccess(res));
//       })
//       .catch((error) => {
//         return dispatch(carFailure(error));
//       });
//   };
// };
