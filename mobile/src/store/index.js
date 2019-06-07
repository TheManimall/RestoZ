import { createStore, combineReducers } from 'redux';
import restaurant from './reducers/restaurantReducer';

const rootReducer = combineReducers({
  restaurant: restaurant,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
