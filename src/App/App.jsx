import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ProtectedRoute from './ProtectedRoute'; 
import { isAuthorized } from '../Api/Api';

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
        <ProtectedRoute path="/blog" component={HomePage} exact addresToRedirect={'/blog/login'} isRoutingAllowed={ isAuthorized(isLoggedIn) } name={'Home'}/> 
        <ProtectedRoute path="/blog/login" component={LoginPage} addresToRedirect={'/blog'}  isRoutingAllowed={ isAuthorized(isLoggedIn) }/>
        <ProtectedRoute path="/blog/signup" component={RegisterPage} addresToRedirect={'/blog'}  isRoutingAllowed={ isAuthorized(isLoggedIn) }/>
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
