import React from 'react';
import { Redirect } from 'react-router-dom';

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

export default HomePage;