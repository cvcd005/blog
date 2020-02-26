import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Store from '../Store';

import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Provider store={Store}>
        <BrowserRouter>
          <Route path="/blog" component={HomePage} exact/>
          <Route path="/blog/login" component={LoginPage} />
          <Route path="/blog/signup" component={RegisterPage} />
        </BrowserRouter>
        </Provider>
    )
  }
}

export default App;
