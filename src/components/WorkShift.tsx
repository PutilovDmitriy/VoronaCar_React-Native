import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colorGren } from "../const";

interface IWorkShiftProps {
  handleStartShift: () => void;
}

const WorkShift: React.FunctionComponent<IWorkShiftProps> = ({
  handleStartShift,
}) => {
  const handlePress = () => {
    handleStartShift();
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={handlePress}
        >
          <Text style={styles.text}>Начать смену</Text>
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
    backgroundColor: colorGren,
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
});
