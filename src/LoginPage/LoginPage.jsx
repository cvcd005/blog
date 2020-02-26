import React from 'react';
import {Link} from 'react-router-dom';

const LoginPage = (props) => {
  return (
    <div>This is Login Page
      <Link to="signup">Link to registration</Link>
    </div>
  )
}

export default LoginPage;