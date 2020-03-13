import { createAction } from 'redux-actions';
import {
  signIn,
  signUp,
  addUserToLocalStorage,
  getArticlesList,
  LikeArticle,
  UnLikeArticle,
  getArticle,
} from '../Api/Api';

export const changeStateToSignIn = createAction('SIGN_IN');
export const changeStateToSignOut = createAction('SIGN_OUT');
export const addArticlesList = createAction('ADD_ARTICLES_LIST');

export const favoriteArticle = createAction('FAVORITE_ARTICLE');
export const deleteFavoriteArticle = createAction('DELETE_FAVORITE_ARTICLE');

export const addArticle = createAction('ADD_ARTICLE');

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

export const thunkGetArticlesList = offset => async dispatch => {
  try {
    const response = await getArticlesList(offset);
    dispatch(addArticlesList(response.data.articles));
  } catch (err) {
    /* console.log('Error when add Articles List'); */
  }
};

export const thunkFavoriteArticle = slug => async dispatch => {
  try {
    const response = await LikeArticle(slug);
    dispatch(favoriteArticle(response.data.article));
  } catch (err) {
    /* console.log('Error when favorite Article'); */
  }
};

export const thunkDeleteFavoriteActicle = slug => async dispatch => {
  try {
    const response = await UnLikeArticle(slug);
    dispatch(deleteFavoriteArticle(response.data.article));
  } catch (err) {
    /* console.log('Error when delete favorite Article'); */
  }
};

export const thunkGetArticle = slug => async dispatch => {
  try {
    const response = await getArticle(slug);
    dispatch(addArticle(response.data.article));
  } catch (err) {
    /* console.log('Error when get Article'); */
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

export const actionCreatorsArticlesList = {
  thunkGetArticlesList,
};

export const actionCreatorsArticle = {
  addArticle,
  thunkGetArticle,
  favoriteArticle,
  thunkFavoriteArticle,
  thunkDeleteFavoriteActicle,
};
