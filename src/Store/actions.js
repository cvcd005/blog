export const actionSignOut = () => ({
  type: 'LOGOUT',
});

export const actionSignIn = user => ({
  type: 'LOGIN',
  payload: { user },
});

export const createThunk = (data, fn) => dispatch => {
  return dispatch(fn(data));
};

export const createThunkSignIn = data => dispatch => {
  return dispatch(actionSignIn(data));
};

export const actionCreatorsSignIn = {
  actionSignIn,
  createThunk,
  createThunkSignIn,
};

export const actionCreatorsSignOut = {
  actionSignOut,
};
