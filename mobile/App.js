import { AppRegistry } from "react-native";
import React from "react";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";

<<<<<<< HEAD
import Main from "./src/components";
=======
import AppComponent from "./src/components/AppComponent";
>>>>>>> 6d7ec5ab382e31e18199adcfe372aa94d38ea3fc

import configureStore from "./src/store";

const store = configureStore();

const App = () => (
  <Provider store={store}>
<<<<<<< HEAD
    <Main />
=======
    <AppComponent />
>>>>>>> 6d7ec5ab382e31e18199adcfe372aa94d38ea3fc
  </Provider>
);

export default App;
