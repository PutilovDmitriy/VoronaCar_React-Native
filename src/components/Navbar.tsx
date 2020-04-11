import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

interface IAppProps {}

const Navbar: React.FC<IAppProps> = () => {
  const handlePress = () => {};
  return (
    <View style={style.navbar}>
      <Button title="lll" onPress={handlePress} />
      <Text style={style.text}>VoronaCar</Text>
    </View>
  );
};

export default Navbar;

const style = StyleSheet.create({
  navbar: {
    height: 80,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#3949ab",
    paddingBottom: 15,
  },
  text: {
    color: "white",
    fontSize: 22,
  },
});
