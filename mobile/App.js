import { AppRegistry } from "react-native";
import React from "react";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";

import AppComponent from "./src/components/App";

import configureStore from "./src/store";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default App;
