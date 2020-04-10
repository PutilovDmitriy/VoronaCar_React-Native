import { Info } from "./Info";
export interface User {
  info: Info;
  authorized: boolean;
  loading: boolean;
  error: any;
}
