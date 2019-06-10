import { createStackNavigator, createAppContainer } from "react-navigation";
import SignIn from "../components/screens/Auth/SignIn";
import SignUp from "../components/screens/Auth/SignUp";

const MainNavigator = createStackNavigator({
  Login: SignIn,
  Registration: SignUp
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
