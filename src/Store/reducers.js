import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  changeStateToSignIn,
  changeStateToSignOut,
  addArticlesList,
  addArticle,
  favoriteArticle,
  deleteFavoriteArticle,
} from './actions';

const isLoggedIn = handleActions(
  {
    [changeStateToSignIn]: () => {
      return true;
    },
    [changeStateToSignOut]: () => {
      return false;
    },
  },
  false
);

const user = handleActions(
  {
    [changeStateToSignIn]: (state, { payload }) => {
      return payload;
    },
  },
  {}
);

const articlesList = handleActions(
  {
    [addArticlesList]: (state, { payload }) => {
      return payload;
    },
    [favoriteArticle]: (state, { payload }) => {
      return state.reduce(
        (acc, el) => (el.slug === payload.slug ? [...acc, payload] : [...acc, el]),
        []
      );
    },
    [deleteFavoriteArticle]: (state, { payload }) => {
      return state.reduce(
        (acc, el) => (el.slug === payload.slug ? [...acc, payload] : [...acc, el]),
        []
      );
    },
  },
  []
);

const currentArticle = handleActions(
  {
    [addArticle]: (state, { payload }) => {
      return payload;
    },
    [favoriteArticle]: (state, { payload }) => {
      return { ...state, favorited: payload.favorited, favoritesCount: payload.favoritesCount };
    },
    [deleteFavoriteArticle]: (state, { payload }) => {
      return { ...state, favorited: payload.favorited, favoritesCount: payload.favoritesCount };
    },
  },
  {}
);

export default combineReducers({
  isLoggedIn,
  user,
  articlesList,
  currentArticle,
});
