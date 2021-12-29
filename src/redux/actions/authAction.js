import {
  SET_USER,
  LOG_OUT,
  SIGN_IN,
  SET_LOGIN_ERROR,
} from "./../contant/index";

// Dummy user for testing
const dummyUser = {
  username: "marcus@gmail.com",
  password: "marcus@123",
  name: "Marcus",
};

// Action Creators
const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const setLoginError = (error) => {
  return {
    type: SET_LOGIN_ERROR,
    payload: { error },
  };
};

const signIn = (userObj) => (dispatch) => {
  dispatch({
    type: SIGN_IN,
  });
  const { username, password } = userObj;

  if (username === dummyUser?.username && password === dummyUser?.password) {
    localStorage.setItem("profileName", dummyUser.name);
    // handle success
    dispatch(
      setUser({
        profileName: dummyUser.name,
      })
    );
  }
  //   Getting error
  else dispatch(setLoginError("Incorrect username or password"));
};

const logOut = () => {
  localStorage.clear();
  return {
    type: LOG_OUT,
  };
};

export { setUser, logOut, signIn, setLoginError };
