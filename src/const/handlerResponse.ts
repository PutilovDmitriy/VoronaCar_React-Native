import {colorGreen, colorRed} from "./index";
import {NativeStackNavigationOptions} from "react-native-screens/lib/typescript/types";

export const handlerError = (navigation: any, message: string, options: NativeStackNavigationOptions) => {
  navigation.setOptions({
    headerTitle: message,
    headerStyle: {
      backgroundColor: colorRed,
    },
  });
  setTimeout(() => {
    navigation.setOptions(options);
  }, 1500)
};

export const handlerSuccess = (navigation: any, message: string, options: NativeStackNavigationOptions) => {
  navigation.setOptions({
    headerTitle: message,
    headerStyle: {
      backgroundColor: colorGreen,
    },
  });
  setTimeout(() => {
    navigation.setOptions(options);
  }, 1500)
}
