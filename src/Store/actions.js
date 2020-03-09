import { createAction } from 'redux-actions';
import { signIn, signUp, addUserToLocalStorage } from '../Api/Api';

export const changeStateToSignIn = createAction('SIGN_IN');
export const changeStateToSignOut = createAction('SIGN_OUT');

export const thunkSignIn = values => async dispatch => {
  try {
    const response = await signIn({ user: values });
    const { user } = response.data;
    dispatch(changeStateToSignIn(user));
    addUserToLocalStorage(user);
  } catch (error) {
    const newError = error.response.data.errors;
    throw newError; // пробрасываем ошибку дальше для UI
  }
};

export const thunkSignUp = values => async dispatch => {
  try {
    const response = await signUp({ user: values });
    const { user } = response.data;
    dispatch(changeStateToSignIn(user));
    addUserToLocalStorage(user);
  } catch (error) {
    const newError = error.response.data.errors;
    throw newError; // пробрасываем ошибку дальше для UI
  }
};

export const actionCreatorsSignIn = {
  changeStateToSignIn,
  thunkSignIn,
  thunkSignUp,
};

export const actionCreatorsSignOut = {
  changeStateToSignOut,
};
