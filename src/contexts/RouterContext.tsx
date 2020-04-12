import React from "react";

type Context = {
  isModalOil: boolean;
  handleCloseModalOil: () => void;
};

const RouterContext = React.createContext<Partial<Context>>({});

export default RouterContext;
