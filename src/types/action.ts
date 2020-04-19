import { VoronaActions } from "./../redux/action/vorona";
import { Car } from "./Car";
import { CarActions } from "./../redux/action/car";
import { Info } from "./UserInfo";
import { LoginActions } from "../redux/action/user";
import { ShiftActions } from "../redux/action/shift";
import { ShiftUpdateInfo } from "./Shift";

// type LoginActions

export interface LoginBegin {
  type: typeof LoginActions.LOGIN_BEGIN;
}

export interface LoginSuccess {
  type: typeof LoginActions.LOGIN_SUCCESS;
  payload: Info;
}

export interface LoginLogout {
  type: typeof LoginActions.LOGIN_LOGOUT;
}

export interface LoginFailure {
  type: typeof LoginActions.LOGIN_FAILURI;
  error: any;
}

export type LoginActionsType =
  | LoginBegin
  | LoginSuccess
  | LoginLogout
  | LoginFailure;

// type CarActions

export interface CarBegin {
  type: typeof CarActions.CAR_BEGIN;
}

export interface CarSuccess {
  type: typeof CarActions.CAR_SUCCESS;
  payload: Car[];
}

export interface CarUpdate {
  type: typeof CarActions.CAR_UPDATE;
  payload: Car;
}

export interface CarFailure {
  type: typeof CarActions.CAR_FAILURI;
  error: any;
}
export type CarActionsType = CarBegin | CarSuccess | CarUpdate | CarFailure;

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

//type shift

export interface ShiftBegin {
  type: typeof ShiftActions.SHIFT_BEGIN;
}
export interface ShiftStart {
  type: typeof ShiftActions.SHIFT_START;
  payload: string;
}
export interface ShiftUpdate {
  type: typeof ShiftActions.SHIFT_UPDATE;
  payload: ShiftUpdateInfo;
}
export interface ShiftFinish {
  type: typeof ShiftActions.SHIFT_FINISH;
}
export interface ShiftFailuti {
  type: typeof ShiftActions.SHIFT_FAILURI;
  payload: any;
}

export type ShiftActionsType =
  | ShiftBegin
  | ShiftStart
  | ShiftUpdate
  | ShiftFinish
  | ShiftFailuti;

export type AppActionsType =
  | LoginActionsType
  | CarActionsType
  | VoronaActionsType
  | ShiftActionsType;
