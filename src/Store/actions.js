export const LogOut = () => ({
  type: 'LOGOUT',
});

export const LogIn = user => ({
  type: 'LOGIN',
  payload: { user },
});

export const Register = () => ({
  type: 'REGISTER',
});

export const createThunk = (data, fn) => dispatch => {
  return dispatch(fn(data));
};

export const actionCreatorsSignIn = {
  LogIn,
  createThunk,
};
