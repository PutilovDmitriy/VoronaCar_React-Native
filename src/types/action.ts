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

export type AppActionsType = LoginActionsType | CarActionsType;
