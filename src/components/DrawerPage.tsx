import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import RouterContext from "../contexts/RouterContext";
import { colorBlack, colorRed } from "../const";
import { Info } from "../types/UserInfo";

interface IDrawerPageProps {
  isModalOil: boolean;
  handleOpenModalOil: () => void;
  handleCloseDrawer: () => void;
  handleStopShift: () => void;
  valueOil: number;
  user: Info;
}

const DrawerPage: React.FunctionComponent<IDrawerPageProps> = ({
  isModalOil,
  handleOpenModalOil,
  handleCloseDrawer,
  handleStopShift,
  valueOil,
  user,
}) => {
  const handlePressOilBlock = () => {
    handleOpenModalOil();
    handleCloseDrawer();
  };

  return (
    <View style={styles.contaner}>
      <View style={styles.topBlock}></View>
      <View style={styles.userLine}>
        <View style={styles.avatar}>
          <Image
            source={require("../../public/img/defaultPet.png")}
            style={styles.imgAvatar}
          />
        </View>
        <View style={styles.name}>
          <Text style={styles.text}>{user.name}</Text>
          <Text style={styles.text}>{user.login}</Text>
        </View>
      </View>
      <TouchableHighlight onPress={handlePressOilBlock}>
        <View style={styles.infoLine}>
          <View style={styles.logoBlock}>
            <Image
              source={require("../../public/img/oil.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.textCategory}>
              Остаток: {valueOil.toFixed(1)}
            </Text>
          </View>
          <View style={styles.alertOil}>
            {valueOil < 50 && (
              <Image
                source={require("../../public/img/alertGas.png")}
                style={{ width: 30, height: 30 }}
              />
            )}
          </View>
        </View>
      </TouchableHighlight>
      <View style={styles.escape}>
        <TouchableHighlight
          style={styles.buttonEscape}
          onPress={handleStopShift}
        >
          <Text style={styles.textCategory}>Завершить смену</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default DrawerPage;

const styles = StyleSheet.create({
  contaner: {
    flexDirection: "column",
    backgroundColor: "#000",
    height: "100%",
  },
  topBlock: {
    minHeight: 50,
    backgroundColor: "#22303B",
  },
  text: {
    color: "#fff",
  },
  userLine: {
    flexDirection: "row",
    height: 80,
    borderBottomWidth: 1,
    backgroundColor: "#22303B",
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
    alignItems: "flex-start",
    paddingLeft: 20,
    justifyContent: "center",
  },
  infoLine: {
    marginTop: 10,
    flexDirection: "row",
    height: 50,
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
  escape: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  buttonEscape: {
    height: 50,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorRed,
    borderRadius: 10,
  },
});
