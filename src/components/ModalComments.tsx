import * as React from "react";
import { Modal, StyleSheet, View, Button, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { colorGreen, colorBlack, colorGrey } from "../const";

interface IModalCommentsProps {
  isModal: boolean;
  closeModal: () => void;
  handleChangeComments: (text: string) => void;
  comments: string;
}

const ModalComments: React.FunctionComponent<IModalCommentsProps> = ({
  isModal,
  closeModal,
  handleChangeComments,
  comments,
}) => {
  return (
    <Modal
      visible={isModal}
      presentationStyle="overFullScreen"
      transparent={true}
      onRequestClose={closeModal}
    >
      <View style={styles.contaner}>
        <View style={styles.content}>
          <Text style={styles.label}>Комментарий:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            value={comments}
            onChangeText={handleChangeComments}
          ></TextInput>
          <View style={styles.buttonLine}>
            <View style={styles.button}>
              <Button
                title="Сохранить"
                onPress={closeModal}
                color={colorGreen}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Очистить"
                onPress={() => handleChangeComments("")}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComments;

const styles = StyleSheet.create({
  contaner: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0,0.8)",
  },
  content: {
    width: "90%",
    height: 200,
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
    height: 100,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: colorGrey,
  },
  buttonLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 10,
  },
  button: {
    width: "45%",
    marginHorizontal: 5,
  },
});
