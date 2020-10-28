import {  Car } from "./Car";
export type RoutesParamList = {
  Home: undefined;
  Car: { car: Car };
  WorkShift: undefined;
  CarInfo: { car: Car };
  AddEvents: undefined;
  DownloadServiceRecords: undefined;
};
