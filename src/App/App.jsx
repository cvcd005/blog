import React from 'react';

import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';

import './App.scss';

const App = (props) => {
  return (
    <>
      <HomePage />
      <LoginPage />
      <RegisterPage />
    </>
  )
}

export default App;
