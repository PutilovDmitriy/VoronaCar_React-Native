import React from "react";
import {ImageStyle, StyleSheet, Text, TextStyle, TouchableHighlight, ViewStyle} from "react-native";
import {colorGreen, colorGreenPressed, colorGrey} from "../../const";
interface IButtonProps {
  title: string,
  onPress: () => void,
  style?: any;
}
const UiButton: React.FC<IButtonProps> = ({title, onPress, style}) => {
  let stylesList = [styles.button, styles.wrapper];
  style && stylesList.push(style);

  return (<TouchableHighlight underlayColor={colorGreenPressed} onPress={onPress} style={stylesList}>
    <Text style={styles.text}>{title}</Text>
  </TouchableHighlight>)
};
const styles = StyleSheet.create({
  wrapper: {
    height: 80,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 24,
  },
  button: {
    width: "100%",
    backgroundColor: colorGreen,

  }
});
export default UiButton;
