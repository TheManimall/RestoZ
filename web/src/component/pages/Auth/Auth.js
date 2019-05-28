import React from "react";
import { Route, Switch } from "react-router-dom";
// import PropTypes from 'prop-types';

import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import { PrivateRoute } from "./helper";

const Auth = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/" component={<h1>LOL</h1>} />
        <Route path="/sign-up" component={Registration} />
      </Switch>
    </div>
  );
};

// Auth.propTypes = {};

export default Auth;
