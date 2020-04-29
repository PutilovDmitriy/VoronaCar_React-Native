import { Problem, ProblemKey } from "./Car";
export type RoutesParamList = {
  Home: undefined;
  Car: { title: string; problem: ProblemKey[]; comments: string };
  WorkShift: undefined;
};
