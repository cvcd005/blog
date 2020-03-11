import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  changeStateToSignIn,
  changeStateToSignOut,
  addArticlesList,
  addArticle,
  favoriteArticle,
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
  },
  []
);

const currentArticle = handleActions(
  {
    [addArticle]: (state, { payload }) => {
      return payload;
    },
    [favoriteArticle]: (state, { payload }) => {
      return payload;
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
