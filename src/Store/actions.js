import { createAction } from 'redux-actions';

export const changeStateToLogIn = createAction('SIGN_IN');
export const changeStateToLogOut = createAction('SIGN_OUT');

export const actionCreatorsSignIn = {
  changeStateToLogIn,
};

export const actionCreatorsSignOut = {
  changeStateToLogOut,
};
