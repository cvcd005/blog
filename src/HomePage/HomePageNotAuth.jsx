import React from 'react';
import { Link } from 'react-router-dom';

const HomePageNotAuth = () => {
  return (
    <div>
      <div className="header">
        This is Homepage
        <div className="header_btn">
          <Link className="btn-primary" to={'/blog/signin'}>SignIn</Link>
          <Link className="btn-primary" to={'/blog/signup'}>SignUp</Link>
        </div>
      </div>
    </div>
    );
};

export default HomePageNotAuth;
