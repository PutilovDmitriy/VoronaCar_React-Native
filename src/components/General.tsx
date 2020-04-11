import React from "react";
import Routes from "../routers/Routers";
import AuthPage from "./AuthPage";

interface GeneralProps {
  authorized: boolean;
}

const General: React.FunctionComponent<GeneralProps> = ({ authorized }) => {
  return true ? <Routes /> : <AuthPage />;
};

export default General;
