import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {LogOut} from '../Store/actions';
import LoginPage from '../LoginPage';

const HomePage = (props) => {
  const { isLoggedIn, LogOut } = props;
  if (isLoggedIn) {
    return (
      <div>This is Homepage
        <span>UserName</span>
        <button type="button" onClick={LogOut}>Exit</button>
      </div>
    )
  } 
  return (
   <Redirect to="/blog/login" />
  )
}

const actionCreators = {
  LogOut: LogOut,
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps, actionCreators)(HomePage);