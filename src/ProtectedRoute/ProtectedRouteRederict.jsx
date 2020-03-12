import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  addresToRedirect,
  isRoutingAllowed,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isRoutingAllowed) {
          return <Component {...props} />
        } 
        return <Redirect to={addresToRedirect} />
      }}
    />
  );
};

export default ProtectedRoute;
