import { createStore, combineReducers } from "redux";
import { reducer as form } from "redux-form";
import restaurant from "./reducers/restaurant";

const rootReducer = combineReducers({
  restaurant,
  form
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
