import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Store from '../Store';

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
          <Route path="/blog" component={HomePage} exact/>
          <Route path="/blog/login" component={LoginPage} />
          <Route path="/blog/signup" component={RegisterPage} />
        </Loader>
      </BrowserRouter>
    </Provider>
  )
};

export default App;
