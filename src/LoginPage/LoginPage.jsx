import React from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signIn, createThunk } from '../Api/Api';
import { LogIn } from '../Store/actions';

const example = {
  "user": {
      "email": "vasay43@mail.ru",
      "username": "vasay43",
      "password": "12345678",
    } 
};


const LoginPage = (props) => {
  const { isLoggedIn, createThunk } = props;

  const click = async () => {
    const response = await signIn(example);
    if (response.status == 200) {
      createThunk(response.data, LogIn);
      console.log(response.data);
    }
  }
  if (isLoggedIn) {
    return <Redirect to="/blog" />
  }
  return (
    <div>This is Login Page
      <button type="button" onClick={click}>click</button>
      <Link to="signup">Link to registration</Link>
    </div>
  )
}

const actionCreators = {
 LogIn: LogIn,
 createThunk: createThunk,
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps, actionCreators)(LoginPage);
