import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "native-base";
import { Field, reduxForm } from "redux-form";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";

import SignUp from "./screens/Auth/SignUp";
import SignIn from "./screens/Auth/SignIn";

export default class App extends React.Component {
  state = { text: "" };
  render() {
    return <SignUp />;
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
