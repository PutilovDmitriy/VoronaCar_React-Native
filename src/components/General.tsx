import React from "react";
import Routes from "../containers/Routers";
import AuthPage from "./AuthPage";
import WorkShift from "./WorkShift";
import { Problem } from "../types/Car";

interface GeneralProps {
  authorized: boolean;
  getValueOil: () => void;
}

const General: React.FunctionComponent<GeneralProps> = ({
  authorized,
  getValueOil,
}) => {
  const [isShift, setShift] = React.useState<boolean>(false);

  React.useEffect(() => {
    getValueOil();
  }, []);

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
