import { combineReducers } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";

const rootReducer = combineReducers({
  restaurantReducer
});

export default rootReducer;
