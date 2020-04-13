import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";

interface IDrawerButtonProps {
  onPress: () => void;
}

const DrawerButton: React.FunctionComponent<IDrawerButtonProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginLeft: 5 }}>
      <Image
        source={require("../../public/img/drawerMenu.png")}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
  );
};

export default DrawerButton;
