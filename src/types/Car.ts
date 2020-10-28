import { Model } from "./Model";
export interface Car {
  id: number;
  number: string;
  model: Model;
  lastService: string;
  lastWashDate: string;
  problems: string[];
  isRepairing: boolean;
  comments: string;
  info: CarInfo;
  events: IEvent[];
}

export interface IEvent {
  mileage: number,
  date: string,
  text: string,
}

export interface CarInfo {
  VIN: string;
  STS: string;
  OSAGO: string;
  dateOSAGO: Date | string;
  code: string;
  tel: string;
  IMEI: string;
}
