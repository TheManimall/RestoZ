import React from 'react';
import { connect } from 'react-redux';
import { Switch, withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Auth from '../pages/Auth/Auth';
import Main from '../pages/Main/Main';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});

const RootRouter = ({ isAuth }) => {
  if (isAuth) {
    return <Main />;
  } else {
    return <Auth />;
  }
  // if (true) {
  //   return <Main />;
  // } else {
  //   return <Auth />;
  // }
};

export default withRouter(connect(mapStateToProps)(RootRouter));
