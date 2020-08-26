import { Model } from "./Model";
export interface Car {
  id: number;
  number: string;
  model: Model;
  lastService: string;
  lastWashDate: string;
  problems: ProblemKey[];
  isRepairing: boolean;
  comments: string;
}

export interface Problem {
  id: ProblemKey;
  name: string;
}

export type ProblemKey = "D" | "A" | "F" | "WT" | "C" | "M" | "EB" | "J";
