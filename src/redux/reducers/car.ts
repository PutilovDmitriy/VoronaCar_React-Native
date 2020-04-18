import { CarActions } from "./../action/car";
import { CarReducer } from "./../../types/CarReduser";
import { AppActionsType } from "../../types/action";
const initialState: CarReducer = {
  info: [],
  loading: false,
  error: null,
};

export const carReducer = (
  state = initialState,
  action: AppActionsType
): CarReducer => {
  switch (action.type) {
    case CarActions.CAR_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CarActions.CAR_SUCCESS:
      return {
        ...state,
        info: action.payload,
        loading: false,
        error: null,
      };
    case CarActions.CAR_UPDATE:
      const idx = state.info.findIndex(
        (item) => item.number === action.payload.number
      );
      state.info.splice(idx, 1);
      return {
        ...state,
        info: [...state.info, action.payload],
        loading: false,
        error: null,
      };
    case CarActions.CAR_FAILURI:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
