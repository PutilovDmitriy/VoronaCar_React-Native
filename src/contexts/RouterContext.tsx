import React from "react";

type Context = {
  isModalOil: boolean;
};

const RouterContext = React.createContext<Partial<Context>>({});

export default RouterContext;
