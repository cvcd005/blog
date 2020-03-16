import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

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

ProtectedRoute.propTypes = {
  componentAuth: PropTypes.elementType.isRequired,
  componentNotAuth: PropTypes.elementType.isRequired,
  isRoutingAllowed: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
