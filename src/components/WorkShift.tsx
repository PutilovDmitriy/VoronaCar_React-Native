import * as React from "react";
import { View, Text, StyleSheet, Button, AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colorGreen } from "../const";
interface IWorkShiftProps {
  handleStartShift: () => void;
  logout: () => void;
}

const WorkShift: React.FunctionComponent<IWorkShiftProps> = ({
  handleStartShift,
  logout,
}) => {
  const handleShift = () => {
    handleStartShift();
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("TOKEN");
      const value = await AsyncStorage.getItem("TOKEN");
      if (value == null) {
        console.log("Токен удален");
        return logout();
      }
    } catch (e) {
      return console.log("Выход не удался");
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          activeOpacity={0.1}
          style={styles.button}
          onPress={handleShift}
        >
          <Text style={styles.text}>Начать смену</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logout}>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Сменить аккаунт</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkShift;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    height: 100,
    backgroundColor: colorGreen,
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
  logout: {
    position: "absolute",
    top: 40,
    right: 15,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
