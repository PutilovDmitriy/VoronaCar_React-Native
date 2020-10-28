import * as React from "react";
import { Modal, View, Text, StyleSheet, Button, TextInput } from "react-native";
import RouterContext from "../contexts/RouterContext";
import { colorBlack, colorGreen } from "../const";

interface IModalOilProps {}

const ModalOil: React.FunctionComponent<IModalOilProps> = () => {
  const { isModalOil, handleCloseModalOil, voronaPlus } = React.useContext(
    RouterContext
  );
  const [value, setValue] = React.useState<string>();

  const handleChangeValue = (text: string) => {
    if (text !== "0" && !isNaN(Number(text))) {
      setValue(text);
    }
  };

  const handleSubmit = () => {
    voronaPlus && voronaPlus(Number(value));
    setValue("");
    handleCloseModalOil && handleCloseModalOil();
  };
  return (
    <Modal
      visible={isModalOil}
      presentationStyle="overFullScreen"
      transparent={true}
      onRequestClose={handleCloseModalOil}
    >
      <View style={styles.container}>
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
            <Button
              title="Заправить"
              onPress={handleSubmit}
              color={colorGreen}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalOil;

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
    borderBottomColor: colorBlack,
  },
  button: {
    width: "100%",
  },
});
