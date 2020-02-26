import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const HomePage = (props) => {
  const { isLoggedIn } = props;
  if (isLoggedIn) {
    return (
      <div>This is Homepage</div>
    )
  } 
  return (
   <Redirect to="/blog/login" />
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps)(HomePage);