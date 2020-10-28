import * as React from "react";
import {View, StyleSheet, Text, Image, Pressable, TouchableHighlight} from "react-native";
import { colorGreen, colorRed} from "../const";
import { Info } from "../types/UserInfo";
import {Flow} from "react-native-animated-spinkit";

interface IDrawerPageProps {
  isModalOil: boolean;
  handleOpenModalOil: () => void;
  handleCloseDrawer: () => void;
  handleStopShift: () => void;
  valueOil: number;
  user: Info;
  shiftActive: boolean;
  handlerLogout: () => void;
  shiftStart: (userId: string) => void;
  handlerNavigate: (name: string) => void;
  shiftLoading: boolean;
}

const DrawerPage: React.FunctionComponent<IDrawerPageProps> = ({
  isModalOil,
  handleOpenModalOil,
  handleCloseDrawer,
  handleStopShift,
  valueOil,
  user,
  handlerLogout,
  shiftStart,
  shiftActive,
  handlerNavigate,
  shiftLoading
}) => {

  const handlePressOilBlock = () => {
    handleOpenModalOil();
    handleCloseDrawer();
  };

  const handlerStartShift = () => {
    shiftStart(user.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBlock}></View>
      <Pressable style={styles.userLine} onPress={() => handlerNavigate('Home')}>
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
      </Pressable>
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
      <TouchableHighlight onPress={() => handlerNavigate('AddEvents') }>
        <View style={styles.infoLine}>
          <View style={styles.textBlock}>
            <Text style={styles.textCategory}>
              Добавить событие
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      <Pressable onPress={() => handlerNavigate('DownloadServiceRecords') }>
        <View style={styles.infoLine}>
          <View style={styles.textBlock}>
            <Text style={styles.textCategory}>
              Скачать отчет
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.bottom}>
        <View>
          {shiftActive ? (
              !shiftLoading ? (
                <Pressable
                  style={styles.buttonStopShift}
                  onPress={handleStopShift}
              >
                <Text style={styles.textCategory}>Завершить смену</Text>
              </Pressable>
              ) : <Flow size={30} color="#fff" />
          ) : (
            !shiftLoading ? (
              <Pressable
                  style={styles.buttonStartShift}
                  onPress={handlerStartShift}
              >
                  <Text style={styles.textCategory}>Начать смену</Text>
              </Pressable>
              ) : <Flow size={30} color="#fff" />
          )}
        </View>
        <View>
          <TouchableHighlight
              style={styles.infoLine}
              onPress={handlerLogout}
          >
            <Text style={styles.textCategory}>Сменить аккаунт</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default DrawerPage;

const styles = StyleSheet.create({
  container: {
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
    marginTop: 30,
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
  bottom: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  buttonStopShift: {
    height: 50,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorRed,
    borderRadius: 10,
  },
  buttonStartShift: {
    height: 50,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorGreen,
    borderRadius: 10,
  },
  logout: {
    height: '100%',
    width: '100%',
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  }
});
