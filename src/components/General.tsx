import React from "react";
import Routes from "../routers/Routers";
import AuthPage from "./AuthPage";
import WorkShift from "./WorkShift";

interface GeneralProps {
  authorized: boolean;
}

const General: React.FunctionComponent<GeneralProps> = ({ authorized }) => {
  const [isShift, setShift] = React.useState<boolean>(false);

  const handleStartShift = () => {
    setShift(true);
  };

  const handleStopShift = () => {
    setShift(false);
  };

  return authorized ? (
    isShift ? (
      <Routes handleStopShift={handleStopShift} />
    ) : (
      <WorkShift handleStartShift={handleStartShift} />
    )
  ) : (
    <AuthPage />
  );
};

export default General;
