import { AppRegistry } from "react-native";
import React from "react";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";

import Main from "./src/components";

import configureStore from "./src/store";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
