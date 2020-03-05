import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { changeStateToLogIn, changeStateToLogOut } from './actions';

const isLoggedIn = handleActions(
  {
    [changeStateToLogIn]: () => {
      return true;
    },
    [changeStateToLogOut]: () => {
      return false;
    },
  },
  false
);

const user = handleActions(
  {
    [changeStateToLogIn]: (state, { payload }) => {
      return payload;
    },
  },
  {}
);
/* const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return true;
    }
    case 'LOGOUT': {
      return false;
    }
    default: {
      return state;
    }
  }
}; */

/* const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return { ...action.payload.user };
    }
    default: {
      return state;
    }
  }
}; */

export default combineReducers({
  isLoggedIn,
  user,
});
