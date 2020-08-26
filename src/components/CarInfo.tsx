import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RoutesParamList } from "../types/RoutesParamList";
import { dateFormat } from "../const";

interface ICarInfoProps {
  navigation: any;
  route: RouteProp<RoutesParamList, "CarInfo">;
}

const CarInfo: React.FunctionComponent<ICarInfoProps> = ({
  navigation,
  route,
}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:
        route.params.car.number === "" ? "Car" : route.params.car.number,
    });
  });
  const info = route.params.car.info;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>VIN:&nbsp;&nbsp;{info.VIN}</Text>
      <Text style={styles.text}>СТС:&nbsp;&nbsp;{info.STS}</Text>
      <Text style={styles.text}>ОСАГО:&nbsp;&nbsp;{info.OSAGO}</Text>
      <Text style={styles.text}>
        Дата окончания ОСАГО:&nbsp;&nbsp;
        {dateFormat(new Date(info.dateOSAGO), "dd.mm.yyyy")}
      </Text>
      <Text style={styles.text}>Код магнитол:&nbsp;&nbsp;{info.code}</Text>
      <Text style={styles.text}>Телефон:&nbsp;&nbsp;{info.tel}</Text>
      <Text style={styles.text}>IMEI:&nbsp;&nbsp;{info.IMEI}</Text>
    </View>
  );
};

export default CarInfo;

const styles = StyleSheet.create({
  container: {
    paddingLeft: "15%",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    marginTop: 15,
  },
});
