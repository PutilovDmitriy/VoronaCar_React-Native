import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

interface IDrawerPageProps {}

const DrawerPage: React.FunctionComponent<IDrawerPageProps> = (props) => {
  return (
    <View style={styles.contaner}>
      <View style={styles.userBlock}></View>
      <Text style={styles.text}>Привет</Text>
    </View>
  );
};

export default DrawerPage;

const styles = StyleSheet.create({
  contaner: {
    flexDirection: "row",
    backgroundColor: "red",
    height: "100%",
    paddingVertical: 25,
  },
  userBlock: {
    width: 80,
    borderWidth: 2,
    borderColor: "#fff",
  },
  text: {
    color: "#fff",
  },
});
