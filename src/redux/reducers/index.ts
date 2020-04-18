import { carReducer } from "./car";
import { userReducer } from "./user";
import { voronaReducer } from "./vorona";
import { combineReducers } from "redux";

export default combineReducers({
  userReducer,
  carReducer,
  voronaReducer,
});
