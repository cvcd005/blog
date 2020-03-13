import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import Store from '../Store';
import { ProtectedRoute, canActivate, ProtectedRouteRederict }from '../ProtectedRoute'; 

import Loader from '../Loader';
import { HomePage, HomePageNotAuth } from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import ListArticles from '../Articles/ListArticles';
import FullArticle from '../Articles/FullArticle';

import 'antd/dist/antd.css';
import './App.scss';

const App = (props) => {
  const { isLoggedIn } = props;
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Loader>
          <ProtectedRoute path="/blog" componentAuth={HomePage} componentNotAuth={HomePageNotAuth} isRoutingAllowed={canActivate(isLoggedIn)}/>
          <ProtectedRouteRederict path="/blog/signin" component={LoginPage} addresToRedirect={'/blog'} isRoutingAllowed={canActivate(isLoggedIn, true)} />
          <ProtectedRouteRederict path="/blog/signup" component={RegisterPage} addresToRedirect={'/blog'} isRoutingAllowed={canActivate(isLoggedIn, true)} />
          <Route path="/blog" exact component={ListArticles} />
          <Route path="/blog/articles/:slug" render={({match}) => (<FullArticle slug={match.params.slug}/>)} />
        </Loader>
      </BrowserRouter>
    </Provider>
  )
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps)(App);
