import { combineReducers } from 'redux';

const isLoggedIn = (state = false, action) => {
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

const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return { ...action.payload.user };
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  isLoggedIn,
  user,
});
