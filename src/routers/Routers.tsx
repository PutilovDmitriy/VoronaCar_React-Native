import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../containers/Home";
import Car from "../components/Car";
import { RoutesParamList } from "../types/RoutesParamList";

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
            header: () => null
          }}
        />
        <Stack.Screen name="Car" component={Car} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
