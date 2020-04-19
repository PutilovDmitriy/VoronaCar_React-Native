import { AppActionsType } from "./../../types/action";
import Vorona from "../../types/Vorona";
import { VoronaActions } from "../action/vorona";
const initialState: Vorona = {
  loading: false,
  value: 0,
  error: null,
};

export const voronaReducer = (state = initialState, action: AppActionsType) => {
  switch (action.type) {
    case VoronaActions.VORONA_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case VoronaActions.VORONA_SUCCESS:
      return {
        ...state,
        loading: false,
        value: action.payload,
      };
    case VoronaActions.VORONA_FAILURI:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case VoronaActions.VORONA_PLUS:
      return {
        ...state,
        loading: false,
        value: state.value + action.payload,
      };
    case VoronaActions.VORONA_MINUS:
      return {
        ...state,
        loading: false,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};
