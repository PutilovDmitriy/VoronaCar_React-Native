import React from "react";
import { Problem } from "../types/Car";

type Context = {
  isModalOil: boolean;
  handleCloseModalOil: () => void;
  handlePlusOil: (value: number) => void;
  serviceCar: (numder: string, problems: Problem[]) => void;
  voronaPlus: (payload: number) => void;
};

const RouterContext = React.createContext<Partial<Context>>({});

export default RouterContext;
