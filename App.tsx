import React from "react";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";
import { AppRegistry } from "react-native";
import General from "./src/containers/General";

export default function App() {
  return (
    <Provider store={Store}>
      <General />
    </Provider>
  );
}

AppRegistry.registerComponent("App", () => App);
