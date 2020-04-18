import React from "react";

type Context = {
  isModalOil: boolean;
  handleCloseModalOil: () => void;
  handlePlusOil: (value: number) => void;
  voronaPlus: (payload: number) => void;
};

const RouterContext = React.createContext<Partial<Context>>({});

export default RouterContext;
