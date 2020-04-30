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
import { ProblemKey } from "../types/Car";
import { ShiftUpdateInfo } from "../types/Shift";
import { colorPurple } from "../const";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CarInfo from "./CarInfo";

interface RoutesProps {
  valueOil: number;
  handleStopShift: () => void;
  getValueOil: () => void;
  voronaPlus: (payload: number) => void;
  voronaMinus: (payload: number) => void;
  serviceCar: (
    numder: string,
    problems: ProblemKey[],
    comments: string
  ) => void;
  shiftId: string;
  shiftUpdate: (info: ShiftUpdateInfo) => {};
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
}) => {
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
          })
        }
      >
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
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
              }}
            />
            <Stack.Screen
              name="Car"
              component={Car}
              options={({ navigation, route }) => ({
                headerTitleAlign: "center",
                headerTitle: "A000AA ",
                headerTitleStyle: {
                  color: "white",
                },
                headerStyle: {
                  backgroundColor: colorPurple,
                },
                headerRight: () => (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                      navigation.navigate("CarInfo", {
                        car: route.params.car,
                      });
                    }}
                  >
                    <Image
                      source={require("../../public/img/info.png")}
                      style={{ marginRight: 10 }}
                    />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name="CarInfo"
              component={CarInfo}
              options={({ navigation }) => ({
                headerTitleAlign: "center",
                headerTitle: "A000AA ",
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
