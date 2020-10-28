import * as React from "react";
import { Image, TouchableOpacity } from "react-native";

interface IDrawerButtonProps {
  onPress: () => void;
}

const DrawerButton: React.FunctionComponent<IDrawerButtonProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginLeft: 20 }}>
      <Image
        source={require("../../public/img/drawerMenu.png")}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
  );
};

export default DrawerButton;
