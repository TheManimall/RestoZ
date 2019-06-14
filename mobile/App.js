import { createStore, applyMiddleware } from "redux";
import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";

import rootReducer from "./src/store";
import AppNavigations from "./src/navigations/AppNavigations";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const App = () => (
  <Provider store={store}>
    <AppNavigations />
  </Provider>
);

export default App;
