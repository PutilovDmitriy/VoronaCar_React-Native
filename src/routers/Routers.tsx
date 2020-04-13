import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../containers/Home";
import Car from "../components/Car";
import { RoutesParamList } from "../types/RoutesParamList";
import { Button, Text } from "react-native";
import DrawerPage from "../components/DrawerPage";
import DrawerLayout from "react-native-gesture-handler/DrawerLayout";
import RouterContext from "../contexts/RouterContext";
import DrawerButton from "../components/DrawerButton";

interface RoutesProps {}

const Stack = createStackNavigator<RoutesParamList>();
let drawler: DrawerLayout | null;

const Routes: React.FC<RoutesProps> = ({}) => {
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

  return (
    <RouterContext.Provider value={{ isModalOil, handleCloseModalOil }}>
      <DrawerLayout
        drawerType="front"
        drawerWidth={300}
        ref={(e) => (drawler = e)}
        renderNavigationView={() =>
          DrawerPage({ isModalOil, handleOpenModalOil, handleCloseDrawer })
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
                  backgroundColor: "#3949ab",
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
              options={{
                headerTitleAlign: "center",
                headerTitle: "A000AA ",
                headerTitleStyle: {
                  color: "white",
                },
                headerStyle: {
                  backgroundColor: "#3949ab",
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DrawerLayout>
    </RouterContext.Provider>
  );
};

export default Routes;
