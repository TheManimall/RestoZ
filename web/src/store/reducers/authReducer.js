import * as Types from '../types';

const initialState = {
  accessToken: null,
  loaded: false,
  isAuth: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuth: action.payload.auth,
        accessToken: action.payload.token,
        loaded: true,
      };
    default:
      return state;
  }
};
