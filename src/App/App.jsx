import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Store from '../Store';
import ProtectedRoute from './ProtectedRoute'; 

import Loader from '../Loader';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';

import 'antd/dist/antd.css';
import './App.scss';

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Loader>
          <ProtectedRoute path="/blog" component={HomePage} exact addresToRedirect={'/blog/login'} /> 
          <ProtectedRoute path="/blog/login" component={LoginPage} addresToRedirect={'/blog'} reverse />
          <ProtectedRoute path="/blog/signup" component={RegisterPage} addresToRedirect={'/blog'} reverse />
        </Loader>
      </BrowserRouter>
    </Provider>
  )
};

export default App;
