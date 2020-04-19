import { AppActionsType } from "./../../types/action";
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

export const shiftUpdate = (): AppActionsType => ({
  type: ShiftActions.SHIFT_UPDATE,
});

export const shiftFinish = (payload: string): AppActionsType => ({
  type: ShiftActions.SHIFT_FINISH,
  payload,
});

export const shiftFailuri = (): AppActionsType => ({
  type: ShiftActions.SHIFT_FAILURI,
});
