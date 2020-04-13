import * as React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  BackHandler,
  Button,
  TextInput,
} from "react-native";
import RouterContext from "../contexts/RouterContext";

interface IModalOilProps {}

const ModalOil: React.FunctionComponent<IModalOilProps> = () => {
  const { isModalOil, handleCloseModalOil } = React.useContext(RouterContext);
  const [value, setValue] = React.useState<string>();

  const handleChangeValue = (text: string) => {
    if (text !== "0" && !isNaN(Number(text))) {
      setValue(text);
    }
  };

  const handleSubmit = () => {};
  return (
    <Modal
      visible={isModalOil}
      presentationStyle="overFullScreen"
      transparent={true}
      onRequestClose={handleCloseModalOil}
    >
      <View style={styles.contaner}>
        <View style={styles.content}>
          <Text style={styles.text}>Объем заправки</Text>
          <TextInput
            value={value}
            style={styles.input}
            keyboardType="numeric"
            placeholder="Литры"
            maxLength={5}
            autoFocus={true}
            onChangeText={handleChangeValue}
          />
          <View style={styles.button}>
            <Button title="Заправить" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalOil;

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
    height: 150,
    paddingTop: 10,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
  input: {
    width: "50%",
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  button: {
    width: "100%",
  },
});
