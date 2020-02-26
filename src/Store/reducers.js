import { combineReducers } from 'redux';

const isLoggedIn = (state = true, action) => {
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
};

export default combineReducers({
  isLoggedIn,
});
