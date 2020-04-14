import { Model } from "./Model";
export interface Car {
  id: number;
  number: string;
  model: Model;
  lastService: string;
  problem: Problem[];
  isRepairing: boolean;
  comments: string;
}

export interface Problem {
  id: ProblemKey;
  name: string;
}

export type ProblemKey = "D" | "A" | "F" | "W" | "C" | "M" | "EB" | "J";
