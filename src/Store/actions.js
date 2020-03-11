import { createAction } from 'redux-actions';
import { signIn, signUp, addUserToLocalStorage, getArticlesList } from '../Api/Api';

export const changeStateToSignIn = createAction('SIGN_IN');
export const changeStateToSignOut = createAction('SIGN_OUT');
export const addArticlesList = createAction('ADD_ARTICLES_LIST');
export const addArticle = createAction('ADD_ARTICLE');
export const favoriteArticle = createAction('FAVORITE_ARTICLE');

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

export const thunkAddArticlesList = offset => async dispatch => {
  try {
    const response = await getArticlesList(offset);
    dispatch(addArticlesList(response.data.articles));
  } catch (err) {
    /* console.log('Error when add Articles List'); */
  }
};

/* export const thunkFavoriteArticle = slug => async dispatch => {
  try {
    const response = await favoriteArticle(slug);
    dispatch(addArticle(response.data));
  } catch (err) {
    console.log(err);
  }
}; */

export const actionCreatorsSignIn = {
  changeStateToSignIn,
  thunkSignIn,
  thunkSignUp,
};

export const actionCreatorsSignOut = {
  changeStateToSignOut,
};

export const actionCreatorsArticlesList = {
  thunkAddArticlesList,
};

export const actionCreatorsArticle = {
  addArticle,
  favoriteArticle,
};
