import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { Car } from "../types/Car";
import { dateFormat, urlsLogo } from "../const/index";

interface CarLineInfoProps {
  carInfo: Car;
}

const CarLineInfo: React.FC<CarLineInfoProps> = ({ carInfo }) => {
  const [img, setImg] = React.useState<ImageSourcePropType>([]);

  React.useEffect(() => {
    switch (carInfo.model) {
      case "K":
        setImg(urlsLogo.K);
        break;
      case "R":
        setImg(urlsLogo.R);
        break;
      case "W":
        setImg(urlsLogo.W);
        break;
      default:
        setImg(urlsLogo.Free);
    }
  }, [carInfo.model]);

  return (
    <View style={styles.contaner}>
      <Image style={styles.logo} source={img} />
      <Text style={styles.number}>{carInfo.number}</Text>
      <View>
        <Text>{dateFormat(new Date(carInfo.lastService), "hh:mm")}</Text>
        <Text>{dateFormat(new Date(carInfo.lastService), "dd.mm")}</Text>
      </View>
    </View>
  );
};

export default CarLineInfo;

const styles = StyleSheet.create({
  contaner: {
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
