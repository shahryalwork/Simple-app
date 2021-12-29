import { SET_USER, LOG_OUT, SIGN_IN, SET_LOGIN_ERROR } from "../contant/index";

// Reducer

const initialState = {
  profileName: null,
  isLoggedIn: false,
  loginError: null,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        profileName: action.payload.profileName,
        isLoggedIn: true,
        loginError: null,
        isLoading: false,
      };

    case LOG_OUT:
      return initialState;

    case SIGN_IN:
      return {
        ...state,
        loginError: null,
        isLoading: true,
      };

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
