import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { signOut } from '../../store/actions/authActions';

const Header = ({ name, signOut }) => {
  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between', margin: '0 10%' }}>
        <Typography variant="h4" color="inherit">
          {name}
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          style={{ cursor: 'pointer' }}
          onClick={() => signOut()}
        >
          <Link to={'/'} style={{ color: '#fff' }}>
            вихід
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default connect(
  state => ({
    name: state.auth.name
  }),
  {
    signOut
  }
)(Header);
