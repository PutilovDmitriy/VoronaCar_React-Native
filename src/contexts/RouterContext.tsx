import React from "react";

type Context = {
  isOpenDrawer: boolean;
};

const RouterContext = React.createContext<Partial<Context>>({});

export default RouterContext;
