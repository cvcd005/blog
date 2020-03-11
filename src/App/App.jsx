import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Store from '../Store';
import ProtectedRoute from './ProtectedRoute'; 
import { isRoutingAllowed } from '../Api/Api';

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
          <ProtectedRoute path="/blog" component={HomePage} exact addresToRedirect={'/blog/login'} isRoutingAllowed={isRoutingAllowed} name={'Home'}/> 
          <ProtectedRoute path="/blog/login" component={LoginPage} addresToRedirect={'/blog'}  isRoutingAllowed={isRoutingAllowed}/>
          <ProtectedRoute path="/blog/signup" component={RegisterPage} addresToRedirect={'/blog'}  isRoutingAllowed={isRoutingAllowed}/>
        </Loader>
      </BrowserRouter>
    </Provider>
  )
};

export default App;
