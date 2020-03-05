import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { changeStateToSignIn, changeStateToSignOut } from './actions';

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

export default combineReducers({
  isLoggedIn,
  user,
});
