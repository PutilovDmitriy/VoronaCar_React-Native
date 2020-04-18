import React from "react";
import { ProblemKey } from "../types/Car";

type Context = {
  isModalOil: boolean;
  handleCloseModalOil: () => void;
  handlePlusOil: (value: number) => void;
  serviceCar: (numder: string, problems: ProblemKey[]) => void;
  voronaPlus: (payload: number) => void;
};

const RouterContext = React.createContext<Partial<Context>>({});

export default RouterContext;
