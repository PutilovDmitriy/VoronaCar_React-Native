import { AppActionsType } from "./../../types/action";
import { ShiftReducer } from "../../types/ShiftReducer";
import { ShiftActions } from "../action/shift";

const initialState: ShiftReducer = {
  info: {
    shiftId: "",
    carNumber: [],
    value: 0,
    money: 0,
  },
  loading: false,
  error: null,
};

export const shiftReducer = (
  state = initialState,
  action: AppActionsType
): ShiftReducer => {
  switch (action.type) {
    case ShiftActions.SHIFT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ShiftActions.SHIFT_START:
      return {
        ...state,
        loading: false,
        info: { shiftId: action.payload, carNumber: [], value: 0, money: 0 },
      };
    case ShiftActions.SHIFT_UPDATE:
      return {
        ...state,
        loading: false,
        info: {
          shiftId: action.payload.shiftId,
          carNumber: [...state.info.carNumber, action.payload.carNumber],
          value: Number(state.info.value) + Number(action.payload.value),
          money: Number(state.info.money) + Number(action.payload.money),
        },
      };
    case ShiftActions.SHIFT_FINISH:
      return initialState;
    case ShiftActions.SHIFT_FAILURI:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
