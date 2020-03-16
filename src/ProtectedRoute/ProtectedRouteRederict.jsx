import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRouteRederict = ({
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

ProtectedRouteRederict.propTypes = {
  component: PropTypes.elementType.isRequired,
  isRoutingAllowed: PropTypes.bool.isRequired,
  addresToRedirect: PropTypes.string.isRequired,
};

export default ProtectedRouteRederict;
