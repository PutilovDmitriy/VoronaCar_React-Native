import { Shift } from "./Shift";

export interface ShiftReducer {
  info: Shift;
  active: boolean;
  loading: boolean;
  error: any;
}
