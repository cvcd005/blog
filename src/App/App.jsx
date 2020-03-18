import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ProtectedRoute, isAuthorized }from '../ProtectedRoute'; 
import Loader from '../Loader';
import { HomePage, HomePageNotAuth } from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import { ListArticles, FullArticle, AddArticleButton, AddArticle, EditArticleButton, EditArticle, } from '../Articles';

import 'antd/dist/antd.css';
import './App.scss';

const App = (props) => {
  const { isLoggedIn } = props;

  return (
    <BrowserRouter>
      <Loader>
        <ProtectedRoute path="/blog" componentAuth={HomePage} componentNotAuth={HomePageNotAuth} isRoutingAllowed={isAuthorized(isLoggedIn)}/>
        <ProtectedRoute exact path="/blog" componentAuth={AddArticleButton} componentNotAuth={()=>null} isRoutingAllowed={isAuthorized(isLoggedIn)} />
        <ProtectedRoute exact path="/blog/articles/:slug" componentAuth={EditArticleButton} componentNotAuth={()=>null}  isRoutingAllowed={isAuthorized(isLoggedIn)} />
        <ProtectedRoute path="/blog/signin" componentAuth={()=> <Redirect to="/blog" />} componentNotAuth={LoginPage} isRoutingAllowed={isAuthorized(isLoggedIn)} />
        <ProtectedRoute path="/blog/signup" componentAuth={() => <Redirect to="/blog" />} componentNotAuth={RegisterPage} isRoutingAllowed={isAuthorized(isLoggedIn)} />
        <Route path="/blog" exact component={ListArticles} />
        <Route exact path="/blog/articles/:slug" render={({match}) => (<FullArticle slug={match.params.slug}/>)} />
        <ProtectedRoute path="/blog/add" componentAuth={AddArticle} componentNotAuth={()=>null} isRoutingAllowed={isAuthorized(isLoggedIn)} />
        <ProtectedRoute path="/blog/articles/:slug/edit" componentAuth={EditArticle} componentNotAuth={()=>null} isRoutingAllowed={isAuthorized(isLoggedIn)} />
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

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
