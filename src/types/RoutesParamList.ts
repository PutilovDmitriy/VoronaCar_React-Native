import { Problem, ProblemKey } from "./Car";
export type RoutesParamList = {
  Home: undefined;
  Car: { title: string; problem: ProblemKey[]; lastWashDate: string };
  WorkShift: undefined;
};
