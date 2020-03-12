import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  addresToRedirect,
  isRoutingAllowed,
  show,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isRoutingAllowed(show)) {
          return <Component {...props} />
        } 
        return <Redirect to={addresToRedirect} />
      }}
    />
  );
};

export default ProtectedRoute;
