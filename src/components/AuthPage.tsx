import React from "react";
import { StyleSheet, View } from "react-native";
import Auth from "../containers/Auth";
import Navbar from "./Navbar";

export default function AuthPage() {
  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <Auth />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20
  }
});
