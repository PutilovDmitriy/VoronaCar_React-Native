import { Car } from "./Car";

export interface CarReducer {
  info: Car[];
  loading: boolean;
  loadingService: boolean;
  error: any;
}
