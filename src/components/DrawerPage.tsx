import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import RouterContext from "../contexts/RouterContext";

interface IDrawerPageProps {
  isModalOil: boolean;
  handleOpenModalOil: () => void;
}

const DrawerPage: React.FunctionComponent<IDrawerPageProps> = ({
  isModalOil,
  handleOpenModalOil,
}) => {
  return (
    <View style={styles.contaner}>
      <View style={styles.userLine}>
        <View style={styles.avatar}>
          <Image
            source={require("../../public/img/defaultPet.png")}
            style={styles.imgAvatar}
          />
        </View>
        <View style={styles.name}>
          <Text style={styles.text}>Путилов Дмитрий</Text>
          <Text style={styles.text}>+7991255722</Text>
        </View>
      </View>
      <TouchableHighlight onPress={handleOpenModalOil}>
        <View style={styles.infoLine}>
          <View style={styles.logoBlock}>
            <Image
              source={require("../../public/img/oil.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.textCategory}>Остаток: </Text>
          </View>
          <View style={styles.alertOil}>
            <Image
              source={require("../../public/img/alertGas.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default DrawerPage;

const styles = StyleSheet.create({
  contaner: {
    flexDirection: "column",
    backgroundColor: "#000",
    height: "100%",
    paddingVertical: 50,
  },
  text: {
    color: "#fff",
  },
  userLine: {
    flexDirection: "row",
    height: 80,
    borderBottomWidth: 1,
    backgroundColor: "#14181A",
  },
  avatar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgAvatar: {
    borderRadius: 100,
    width: 60,
    height: 60,
  },
  name: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  infoLine: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "#000",
  },
  logoBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textBlock: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  alertOil: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textCategory: {
    color: "#fff",
    fontSize: 24,
  },
});
