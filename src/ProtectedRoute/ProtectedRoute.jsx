import React from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoute = ({
  componentAuth: ComponentAuth,
  componentNotAuth: ComponentNotAuth,
  isRoutingAllowed,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isRoutingAllowed) {
          return <ComponentAuth {...props} />
        } 
        return <ComponentNotAuth {...props} />
      }}
    />
  );
};

export default ProtectedRoute;
