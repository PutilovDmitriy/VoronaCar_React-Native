import { urlVorona } from "./../../const/index";
import { AppActionsType } from "../../types/action";
import { Dispatch } from "react";

export enum VoronaActions {
  VORONA_BEGIN = "VORONA_BEGIN",
  VORONA_SUCCESS = "VORONA_SUCCESS",
  VORONA_FAILURI = "VORONA_FAILURI",
  VORONA_PLUS = "VORONA_PLUS",
  VORONA_MINUS = "VORONA_MINUS",
}

export const voronaBegin = (): AppActionsType => {
  return { type: VoronaActions.VORONA_BEGIN };
};

export const voronaSuccess = (payload: number): AppActionsType => {
  return { type: VoronaActions.VORONA_SUCCESS, payload };
};

export const voronaFailure = (payload: string): AppActionsType => {
  return { type: VoronaActions.VORONA_FAILURI, payload };
};

export const voronaPlus = (payload: number): AppActionsType => {
  return { type: VoronaActions.VORONA_PLUS, payload };
};

export const voronaMinus = (payload: number): AppActionsType => {
  return { type: VoronaActions.VORONA_MINUS, payload };
};

export const voronaGetValue = () => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(voronaBegin());
    console.log("hello");

    return fetch(urlVorona)
      .then((response) => response.json())
      .then((res) => {
        return dispatch(voronaSuccess(res));
      })
      .catch((error) => {
        console.log(error);
        dispatch(voronaFailure(error));
      });
  };
};

export const voronaPlusOil = (payload: number) => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(voronaBegin());
    let url = urlVorona + "/plus";
    return fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ value: payload }),
    })
      .then((response) => response.json())
      .then(
        (res) => {
          console.log(res);
          dispatch(voronaPlus(payload));
        },
        (error) => {
          dispatch(voronaFailure(error));
        }
      );
  };
};
