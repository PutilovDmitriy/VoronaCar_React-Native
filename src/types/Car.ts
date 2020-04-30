import { Model } from "./Model";
export interface Car {
  id: number;
  number: string;
  model: Model;
  lastService: string;
  problems: ProblemKey[];
  isRepairing: boolean;
  comments: string;
  info: CarInfo;
}

export interface Problem {
  id: ProblemKey;
  name: string;
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

export type ProblemKey = "D" | "A" | "F" | "W" | "C" | "M" | "EB" | "J";
