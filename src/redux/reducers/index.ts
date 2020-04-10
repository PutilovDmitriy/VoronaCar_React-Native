import { carReducer } from "./car";
import { userReducer } from "./user";
import { combineReducers } from "redux";

export default combineReducers({
  userReducer,
  carReducer
});
