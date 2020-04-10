import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { View, StyleSheet, Text, Animated, Image } from "react-native";
import SwipeWrapper from "./SwipeWrapper";
import { Car } from "../types/Car";
import CarLineInfo from "./CarLineInfo";

interface CarLineProps {
  carInfo: Car;
  navigation: any;
}

const CarLine: React.FunctionComponent<CarLineProps> = ({
  carInfo,
  navigation
}) => {
  return (
    <SwipeWrapper>
      <TouchableHighlight
        underlayColor="#ccc"
        activeOpacity={1}
        style={styles.container}
        onPress={navigation}
      >
        <CarLineInfo carInfo={carInfo} />
      </TouchableHighlight>
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
    borderBottomWidth: 0.5
  }
});
