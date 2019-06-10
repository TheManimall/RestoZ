import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../components/screens/Home/Home";
import SignIn from "../components/screens/Auth/SignIn";
import SignUp from "../components/screens/Auth/SignUp";

const MainNavigator = createStackNavigator({
  Login: SignIn,
  Registration: SignUp,
  Home: Home
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
