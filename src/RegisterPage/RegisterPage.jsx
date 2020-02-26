import React from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const RegisterPage = (props) => {
  const { isLoggedIn } = props;
  if (isLoggedIn) {
    return <Redirect to="/blog" />
  }
  return (
    <div>This is Register Page
      <Link to="login">Link to login</Link>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps)(RegisterPage);
