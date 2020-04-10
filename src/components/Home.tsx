import React, { useCallback, useEffect } from "react";
import Drawer from "react-native-drawer";
import { Text, Button, View, PickerItem, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RoutesParamList } from "../types/RoutesParamList";
import { FlatList } from "react-native-gesture-handler";
import CarLine from "./CarLine";
import { Car } from "../types/Car";
import { Circle } from "react-native-animated-spinkit";
import { colorGren } from "../const";

interface HomeProps {
  navigation: StackNavigationProp<RoutesParamList>;
  carData: Car[];
  loading: boolean;
  error: any;
  getCarInfo: () => void;
}

interface Flat {
  id: string;
  title: string;
}

const flat: Flat[] = [
  { id: "1", title: "one" },
  { id: "2", title: "two" }
];

const Home: React.FC<HomeProps> = ({
  navigation,
  carData,
  loading,
  error,
  getCarInfo
}) => {
  const initFetch = useCallback(() => {
    getCarInfo();
  }, [getCarInfo]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    // <Drawer
    //   type="overlay"
    //   content={<Text>Привет</Text>}
    //   openDrawerOffset={100}
    //   open={false}
    // ></Drawer>
    loading ? (
      <View style={styles.loading}>
        <Circle size={100} color={colorGren} />
      </View>
    ) : (
      <View>
        <FlatList
          data={carData}
          renderItem={({ item }) => (
            <CarLine
              carInfo={item}
              navigation={() => {
                navigation.navigate("Car");
              }}
            />
          )}
          keyExtractor={item => item.number}
        />
      </View>
    )
  );
};

export default Home;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
