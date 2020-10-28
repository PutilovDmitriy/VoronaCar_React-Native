import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../containers/Home";
import Car from "./Car";
import { RoutesParamList } from "../types/RoutesParamList";
import DrawerPage from "./DrawerPage";
import DrawerLayout from "react-native-gesture-handler/DrawerLayout";
import RouterContext from "../contexts/RouterContext";
import DrawerButton from "./DrawerButton";
import { ShiftUpdateInfo } from "../types/Shift";
import { colorPurple } from "../const";
import { Info } from "../types/UserInfo";
import CarInfo from "./CarInfo";
import Events from "./Events";
import DropDownMenu from "./DropDownMenu";
import ServiceRecords from "./ServiceRecords";

interface RoutesProps {
  valueOil: number;
  handleStopShift: () => void;
  getValueOil: () => void;
  voronaPlus: (payload: number) => void;
  voronaMinus: (payload: number) => void;
  serviceCar: (
    numder: string,
    problems: string[],
    isWashed?: boolean
  ) => void;
  shiftId: string;
  shiftUpdate: (info: ShiftUpdateInfo) => {};
  user: Info;
  shiftActive: boolean;
  handlerLogout: () => void;
  shiftStart: (userId: string) => void;
  addCarProblem: (number: string, problems: string[]) => void;
  shiftLoading: boolean;
}

const Stack = createStackNavigator<RoutesParamList>();

let drawler: DrawerLayout | null;

const Routes: React.FC<RoutesProps> = ({
  handleStopShift,
  valueOil,
  voronaPlus,
  serviceCar,
  shiftId,
  shiftUpdate,
  voronaMinus,
  user,
  shiftStart,
  handlerLogout,
  shiftActive,
  addCarProblem,
  shiftLoading
}) => {
  const navigationRef = React.useRef(null);
  const [isModalOil, setModalOil] = React.useState<boolean>(false);

  const handleOpenModalOil = () => {
    setModalOil(true);
  };

  const handleCloseModalOil = () => {
    setModalOil(false);
  };

  const handleCloseDrawer = () => {
    drawler?.closeDrawer();
  };

  const handlePlusOil = (value: number) => {};

  const handlerNavigate = (name: string, params?: any ) => {
    navigationRef.current?.navigate(name, params);
    handleCloseDrawer();
  };

  return (
    <RouterContext.Provider
      value={{
        isModalOil,
        handleCloseModalOil,
        handlePlusOil,
        voronaPlus,
        voronaMinus,
        serviceCar,
        shiftId,
        shiftUpdate,
      }}
    >
      <DrawerLayout
        drawerType="front"
        drawerWidth={300}
        ref={(e) => (drawler = e)}
        renderNavigationView={() =>
          DrawerPage({
            isModalOil,
            handleOpenModalOil,
            handleCloseDrawer,
            handleStopShift,
            valueOil,
            user,
            handlerLogout,
            shiftStart,
            shiftActive,
            handlerNavigate,
            shiftLoading
          })
        }
      >
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={({ navigation }) => ({
                headerTitleAlign: "center",
                headerTitle: "VoronaCar",
                headerTitleStyle: {
                  color: "white",
                },
                headerStyle: {
                  backgroundColor: colorPurple,
                },
                headerLeft: () => (
                  <DrawerButton
                    onPress={() => {
                      drawler?.openDrawer();
                    }}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="Car"
              component={Car}
              options={({ route }) => ({
                headerTitleAlign: "center",
                headerTitle: "A000AA ",
                headerTitleStyle: {
                  color: "white",
                },
                headerStyle: {
                  backgroundColor: colorPurple,
                },
                headerRight: () => (
                  <DropDownMenu handlerNavigate={handlerNavigate} car={route.params.car} needShowInfo={true}/>
                ),
              })}
            />
            <Stack.Screen
              name="CarInfo"
              component={CarInfo}
              options={({ route }) => ({
                headerTitleAlign: "center",
                headerTitle: "A000AA ",
                headerTitleStyle: {
                  color: "white",
                },
                headerStyle: {
                  backgroundColor: colorPurple,
                },
                headerRight: () => (
                  <DropDownMenu
                    handlerNavigate={handlerNavigate}
                    car={route.params.car}
                    needShowInfo={false}
                    addProblem={addCarProblem}/>
                ),
              })}
            />
            <Stack.Screen
                name="AddEvents"
                component={Events}
                options={() => ({
                headerTitleAlign: "center",
                headerTitle: "Новое событие ",
                headerTitleStyle: {
                    color: "white",
                },
                headerStyle: {
                    backgroundColor: colorPurple,
                },
            })}
            />
            <Stack.Screen
              name="DownloadServiceRecords"
              component={ServiceRecords}
              options={() => ({
                headerTitleAlign: "center",
                headerTitle: "Отчет",
                headerTitleStyle: {
                  color: "white",
                },
                headerStyle: {
                  backgroundColor: colorPurple,
                },
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DrawerLayout>
    </RouterContext.Provider>
  );
};

export default Routes;
