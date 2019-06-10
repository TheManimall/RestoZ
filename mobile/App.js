import { AppRegistry } from "react-native";
import React from "react";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";

import AppComponent from "./src/components/AppComponent";

import configureStore from "./src/store";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
);

export default App;
