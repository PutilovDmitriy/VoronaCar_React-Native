import { Car } from "./Car";

export interface CarReducer {
  info: Car[];
  loading: boolean;
  error: any;
}
