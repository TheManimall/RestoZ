import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import AppNavigator from "../navigations/AppNavigations";

export default class AppComponent extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
