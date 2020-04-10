import { Model } from "./Model";
export interface Car {
  id: number;
  number: string;
  model: Model;
  lastService: string;
  problem: number[];
  isRepairing: boolean;
  comments: string;
}
