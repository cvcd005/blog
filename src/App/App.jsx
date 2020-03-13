import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { ProtectedRoute, canActivate, ProtectedRouteRederict }from '../ProtectedRoute'; 
import Loader from '../Loader';
import { HomePage, HomePageNotAuth } from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import { ListArticles, FullArticle, AddArticleButton, AddArticle, EditArticleButton, EditArticle, } from '../Articles';

import 'antd/dist/antd.css';
import './App.scss';

const App = (props) => {
  const { isLoggedIn } = props;
  const reverse = true;

  return (
    <BrowserRouter>
      <Loader>
        <ProtectedRoute path="/blog" componentAuth={HomePage} componentNotAuth={HomePageNotAuth} isRoutingAllowed={canActivate(isLoggedIn)}/>
        <ProtectedRoute exact path="/blog" componentAuth={AddArticleButton} componentNotAuth={()=>null} isRoutingAllowed={canActivate(isLoggedIn)} />
        <ProtectedRoute exact path="/blog/articles/:slug" componentAuth={EditArticleButton} componentNotAuth={()=>null}  isRoutingAllowed={canActivate(isLoggedIn)} />
        <ProtectedRouteRederict path="/blog/signin" component={LoginPage} addresToRedirect={'/blog'} isRoutingAllowed={canActivate(isLoggedIn, reverse)} />
        <ProtectedRouteRederict path="/blog/signup" component={RegisterPage} addresToRedirect={'/blog'} isRoutingAllowed={canActivate(isLoggedIn, reverse)} />
        <Route path="/blog" exact component={ListArticles} />
        <Route exact path="/blog/articles/:slug" render={({match}) => (<FullArticle slug={match.params.slug}/>)} />
        <ProtectedRouteRederict path="/blog/add" component={AddArticle} addresToRedirect={'/blog'} isRoutingAllowed={canActivate(isLoggedIn)} />
        <ProtectedRouteRederict path="/blog/articles/:slug/edit" component={EditArticle} addresToRedirect={'/blog'} isRoutingAllowed={canActivate(isLoggedIn)} />
        <Switch>
          <Redirect to={'/blog'} />
        </Switch>
      </Loader>
      </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};


export default connect(mapStateToProps)(App);
