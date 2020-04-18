import React from "react";
import Routes from "./Routers";
import AuthPage from "./AuthPage";
import WorkShift from "./WorkShift";
import { Button } from "react-native";

interface GeneralProps {
  authorized: boolean;
  valueOil: number;
  getValueOil: () => void;
  voronaPlus: (payload: number) => void;
}

const General: React.FunctionComponent<GeneralProps> = ({
  authorized,
  valueOil,
  getValueOil,
  voronaPlus,
}) => {
  const [isShift, setShift] = React.useState<boolean>(false);

  // React.useEffect(() => {
  //   getValueOil();
  // }, []);

  const handleStartShift = () => {
    setShift(true);
  };

  const handleStopShift = () => {
    setShift(false);
  };

  return authorized ? (
    isShift ? (
      <Routes
        handleStopShift={handleStopShift}
        valueOil={valueOil}
        voronaPlus={voronaPlus}
      />
    ) : (
      <WorkShift handleStartShift={handleStartShift} />
    )
  ) : (
    <AuthPage />
  );
};

export default General;
