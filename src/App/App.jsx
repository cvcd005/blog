import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ProtectedRoute from './ProtectedRoute'; 
import { canActivate } from '../Api/Api';

import Loader from '../Loader';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';

import 'antd/dist/antd.css';
import './App.scss';

const App = (props) => {
  const { isLoggedIn } = props;
  return (
    <BrowserRouter>
      <Loader>
        <ProtectedRoute path="/blog" component={HomePage} exact addresToRedirect={'/blog/login'} isRoutingAllowed={ canActivate(isLoggedIn) } show/> 
        <ProtectedRoute path="/blog/login" component={LoginPage} addresToRedirect={'/blog'}  isRoutingAllowed={ canActivate(isLoggedIn) }/>
        <ProtectedRoute path="/blog/signup" component={RegisterPage} addresToRedirect={'/blog'}  isRoutingAllowed={ canActivate(isLoggedIn) }/>
      </Loader>
    </BrowserRouter>
  )
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps)(App);
