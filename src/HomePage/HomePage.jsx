import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { actionCreatorsSignOut } from '../Store/actions';
import { clearLocalStorage } from '../Api/Api';

const HomePage = props => {
  const { isLoggedIn, actionSignOut, user } = props;
  if (isLoggedIn) {
    return (
      <div className="header">
        This is Homepage
        <div className="header_btn">
          <span>{user.username}</span>
          <button  
            onClick={()=> {
              clearLocalStorage();
              actionSignOut()
            }}
            type="button"
            className="btn-primary"
          >
            Exit
          </button>
        </div>
      </div>
    );
  } 
  return (
   <Redirect to="/blog/login" />
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user,
  }
};

export default connect(mapStateToProps, actionCreatorsSignOut)(HomePage);