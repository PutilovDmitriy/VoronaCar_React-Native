import { VoronaActions } from "./../redux/action/vorona";
import { Car } from "./Car";
import { CarActions } from "./../redux/action/car";
import { Info } from "./Info";
import { LoginActions } from "../redux/action/user";

// type LoginActions

export interface LoginBegin {
  type: typeof LoginActions.LOGIN_BEGIN;
}

export interface LoginSuccess {
  type: typeof LoginActions.LOGIN_SUCCESS;
  payload: Info;
}

export interface LoginFailure {
  type: typeof LoginActions.LOGIN_FAILURI;
  error: any;
}

export type LoginActionsType = LoginBegin | LoginSuccess | LoginFailure;

// type CarActions

export interface CarBegin {
  type: typeof CarActions.CAR_BEGIN;
}

export interface CarSuccess {
  type: typeof CarActions.CAR_SUCCESS;
  payload: Car[];
}

export interface CarFailure {
  type: typeof CarActions.CAR_FAILURI;
  error: any;
}

export type CarActionsType = CarBegin | CarSuccess | CarFailure;

//type Vorona

export interface VoronaBegin {
  type: typeof VoronaActions.VORONA_BEGIN;
}

export interface VoronaSuccess {
  type: typeof VoronaActions.VORONA_SUCCESS;
  payload: number;
}

export interface VoronaFailure {
  type: typeof VoronaActions.VORONA_FAILURI;
  payload: string;
}

export interface VoronaPlus {
  type: typeof VoronaActions.VORONA_PLUS;
  payload: number;
}

export interface VoronaMinus {
  type: typeof VoronaActions.VORONA_MINUS;
  payload: number;
}

export type VoronaActionsType =
  | VoronaBegin
  | VoronaSuccess
  | VoronaFailure
  | VoronaPlus
  | VoronaMinus;

export type AppActionsType =
  | LoginActionsType
  | CarActionsType
  | VoronaActionsType;
