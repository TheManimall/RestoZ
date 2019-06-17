import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import SignIn from "../components/screens/Auth/SignIn";
import SignUp from "../components/screens/Auth/SignUp";
import TabNavigations from "./TabNavigations";

const MainNavigator = createStackNavigator({
  Login: SignIn,
  Registration: SignUp,
  Home: TabNavigations
});

const AppNavigations = createAppContainer(MainNavigator);

export default AppNavigations;
