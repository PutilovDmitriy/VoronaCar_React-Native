import { User } from "../../types/User";
import { AppActionsType } from "../../types/action";
import { LoginActions } from "../action/user";

const initialState: User = {
  info: {
    id: 0,
    name: "",
    login: "",
    password: ""
  },
  authorized: false,
  loading: false,
  error: null
};

export const userReducer = (
  state = initialState,
  action: AppActionsType
): User => {
  switch (action.type) {
    case LoginActions.LOGIN_BEGIN:
      return {
        ...state,
        loading: true
      };
    case LoginActions.LOGIN_SUCCESS:
      return {
        ...state,
        info: action.payload,
        loading: false,
        authorized: true,
        error: null
      };
    case LoginActions.LOGIN_FAILURI:
      return {
        ...state,
        loading: false,
        authorized: false,
        error: action.error
      };
    default:
      return state;
  }
};
