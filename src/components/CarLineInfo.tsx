import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Car } from "../types/Car";
import {colorRed, dateFormat, urlsLogo} from "../const/index";

interface CarLineInfoProps {
  carInfo: Car;
}

const CarLineInfo: React.FC<CarLineInfoProps> = ({ carInfo }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={urlsLogo(carInfo.model)} />
      <Text style={carInfo.problems && carInfo.problems.length > 0 ? [styles.number, { color: colorRed }] : styles.number}>{carInfo.number}</Text>
      <View>
        <Text>{dateFormat(new Date(carInfo.lastService), "hh:mm", true)}</Text>
        <Text>{dateFormat(new Date(carInfo.lastService), "dd.mm", true)}</Text>
      </View>
    </View>
  );
};

export default CarLineInfo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 40,
  },
  number: {
    fontSize: 20,
  },
});
