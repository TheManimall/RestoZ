import * as Types from '../types';

const initialState = {
  accessToken: null,
  loaded: false,
  isAuth: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuth: action.payload.auth,
        accessToken: action.payload.token,
        id: action.payload.id,
        name: action.payload.name,
        loaded: true
      };
    case Types.SIGN_OUT:
      return {
        ...state,
        accessToken: null,
        isAuth: false
      };
    default:
      return state;
  }
};
