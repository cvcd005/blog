import React from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const LoginPage = (props) => {
  const { isLoggedIn } = props;
  if (isLoggedIn) {
    return <Redirect to="/blog" />
  }
  return (
    <div>This is Login Page
      <Link to="signup">Link to registration</Link>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps)(LoginPage);
