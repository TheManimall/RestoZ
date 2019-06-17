import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './authReducer';
import main from './mainReducer';

const rootReducer = combineReducers({
  form,
  auth,
  main,
});

export default rootReducer;
