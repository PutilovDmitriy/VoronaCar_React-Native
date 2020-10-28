import React from "react";
import {StyleSheet, Pressable} from "react-native";
import SwipeWrapper from "./SwipeWrapper";
import { Car } from "../types/Car";
import CarLineInfo from "./CarLineInfo";
import {colorGrey} from "../const";

interface CarLineProps {
  carInfo: Car;
  navigation: any;
}

const CarLine: React.FunctionComponent<CarLineProps> = ({
  carInfo,
  navigation,
}) => {
  return (
    <SwipeWrapper problems={carInfo.problems} number={carInfo.number}>
      <Pressable
        style={(state) => state.pressed ? [styles.container, { backgroundColor: colorGrey }] : styles.container}
        onPress={navigation}
      >
        <CarLineInfo carInfo={carInfo} />
      </Pressable>
    </SwipeWrapper>
  );
};

export default CarLine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: "#fff",
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.5,
  },
});
