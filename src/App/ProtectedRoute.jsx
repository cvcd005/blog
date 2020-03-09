import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const ProtectedRoute = ({
  component: Component,
  addresToRedirect,
  reverse,
  isLoggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (reverse) {
          if (isLoggedIn) {
            return <Redirect to={addresToRedirect} />;
          }
          return <Component {...props} />;
        }
        if (isLoggedIn) {
          return <Component {...props} />;
        }
        return <Redirect to={addresToRedirect} />;
      }}
    />
  );
};

export default connect(mapStateToProps)(ProtectedRoute);
