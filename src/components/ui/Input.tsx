import React, {useRef} from "react";
import {KeyboardType, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import {colorDarkGrey, colorGreen, colorGreenPressed, colorGrey, colorRed} from "../../const";

interface IInputProps {
  title: string,
  descriptor?: string,
  placeholder: string,
  onChangeText: (text: string) => void,
  value: string,
  keyboardType?: KeyboardType,
}

const UiInput: React.FC<IInputProps> = ({title, placeholder, descriptor, onChangeText, value, keyboardType = "number-pad"}) => {
  const refInput = useRef<TextInput>(null);

  return (
    <Pressable style={styles.wrapper} onPress={() => refInput.current && refInput.current.focus()}>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        style={[styles.input, styles.label]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        ref={refInput}
      />
      {descriptor && (<Text style={styles.label}>{descriptor}</Text>)}
  </Pressable>)
};
const styles = StyleSheet.create({
  wrapper: {
    height: 80,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colorDarkGrey,
    paddingHorizontal: 20,
    borderColor: 'white',
    borderBottomWidth: 0.5
  },
  label: {
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold"
},
  input: {
    width: 200,
    textAlign: "right",
  }

});
export default UiInput;
