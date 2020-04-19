import React, { useCallback, useEffect, useContext } from "react";
import { View, StyleSheet, Modal, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RoutesParamList } from "../types/RoutesParamList";
import { FlatList } from "react-native-gesture-handler";
import CarLine from "./CarLine";
import { Car } from "../types/Car";
import { Circle } from "react-native-animated-spinkit";
import { colorGren } from "../const";
import ModalOil from "./ModalOil";

interface HomeProps {
  navigation: StackNavigationProp<RoutesParamList>;
  carData: Car[];
  loading: boolean;
  error: any;
  getCarInfo: () => void;
}

const Home: React.FC<HomeProps> = ({
  navigation,
  carData,
  loading,
  error,
  getCarInfo,
}) => {
  const initFetch = useCallback(() => {
    getCarInfo();
  }, [getCarInfo]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return loading ? (
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
              navigation.navigate("Car", {
                title: item.number,
                problem: item.problems,
              });
            }}
          />
        )}
        keyExtractor={(item) => item.number}
      />
      <ModalOil />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
