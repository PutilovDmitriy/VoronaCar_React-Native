import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { colorDarkGreen, colorPurple } from "../const";

interface IAppProps {}

const Navbar: React.FC<IAppProps> = () => {
  const handlePress = () => {};
  return (
    <View style={style.navbar}>
      <Text style={style.text}>VoronaCar</Text>
    </View>
  );
};

export default Navbar;

const style = StyleSheet.create({
  navbar: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorPurple,
    paddingTop: 25,
  },
  text: {
    color: "white",
    fontSize: 22,
  },
});
