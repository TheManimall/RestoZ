import { createStore, combineReducers, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";

const rootReducer = combineReducers({
  restaurantReducer
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;
