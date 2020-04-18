import { Info } from "./UserInfo";
export interface User {
  info: Info;
  authorized: boolean;
  loading: boolean;
  error: any;
}
