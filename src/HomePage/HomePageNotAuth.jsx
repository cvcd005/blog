import React from 'react';
import { Link } from 'react-router-dom';

const HomePageNotAuth = () => {
  
  const onClick = (evt) => {
    evt.stopPropagation();
  }

  return (
    <div>
      <div className="header">
        <Link to={'/blog'} className="link-primary">
          <span>This is Homepage</span>
        </Link>
          <div className="header_btn" onClick={onClick}>
            <Link className="btn-primary" to={'/blog/signin'}>SignIn</Link>
            <Link className="btn-primary" to={'/blog/signup'}>SignUp</Link>
          </div>
        </div>
    </div>
  );
};

export default HomePageNotAuth;
