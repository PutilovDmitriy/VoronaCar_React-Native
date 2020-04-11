import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../containers/Home";
import Car from "../components/Car";
import { RoutesParamList } from "../types/RoutesParamList";
import Navbar from "../components/Navbar";

interface RoutesProps {}

const Stack = createStackNavigator<RoutesParamList>();

const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <Navbar />,
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
  );
};

export default Routes;
