import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';

import './App.scss';

const App = (props) => {
  return (
    <BrowserRouter>
      <Route path="/blog" component={HomePage} exact/>
      <Route path="/blog/login" component={LoginPage} />
      <Route path="/blog/signup" component={RegisterPage} />
    </BrowserRouter>
  )
}

export default App;
