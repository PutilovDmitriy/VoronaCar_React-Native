import axios from "axios";
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
    return axios
      .get(urlVorona)
      .then((res) => {
        console.log(res.data);

        return dispatch(voronaSuccess(res.data));
      })
      .catch((error) => {
        dispatch(voronaFailure(error.response.data.message));
      });
  };
};

export const voronaPlusOil = (payload: number) => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(voronaBegin());
    let url = urlVorona + "/plus";
    return axios.put(url, { value: payload }).then(
      (res) => {
        return dispatch(voronaPlus(payload));
      },
      (error) => {
        dispatch(voronaFailure(error.response.data.message));
      }
    );
  };
};

export const voronaMinusOil = (payload: number) => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(voronaBegin());
    let url = urlVorona + "/minus";
    return axios.put(url, { value: payload }).then(
      (res) => {
        return dispatch(voronaMinus(payload));
      },
      (error) => {
        dispatch(voronaFailure(error.response.data.message));
      }
    );
  };
};
