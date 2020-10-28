import React from "react";
import {View, Text, StyleSheet, TextInput, Modal, Button} from "react-native";
import {colorGreen, colorGrey} from "../const";

interface ITextModal {
  isShowModal: boolean;
  handlerCloseModal: () => void;
  text: string;
  onChangeText: (text: string) => void;
  handlerSaveModal: () => void;
  title: string;
  buttonTitle: string
}

const TextModal: React.FunctionComponent<ITextModal> = ({ isShowModal, handlerCloseModal, text, onChangeText, handlerSaveModal, title, buttonTitle }) => {
  return (
    <Modal
      visible={isShowModal}
      presentationStyle="overFullScreen"
      transparent={true}
      onRequestClose={handlerCloseModal}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.label}>{title}:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            value={text}
            onChangeText={onChangeText}
          />
          <View style={styles.button}>
            <Button
              title={buttonTitle}
              onPress={handlerSaveModal}
              color={colorGreen}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
};

export default TextModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0,0.8)",
  },
  content: {
    width: "90%",
    height: 400,
    paddingTop: 10,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    alignSelf: "flex-start",
  },
  input: {
    fontSize: 16,
    width: "90%",
    height: 300,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: colorGrey,
  },
  button: {
    width: "45%",
    marginBottom: 10
  },
});
