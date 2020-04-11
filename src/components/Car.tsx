import React from "react";
import { Text } from "react-native";

interface IAppProps {
  navigation: any;
  route: any;
}

const Car: React.FC<IAppProps> = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title === "" ? "Car" : route.params.title,
    });
  }, [navigation, route.params.title]);

  return <Text>Car</Text>;
};

export default Car;
