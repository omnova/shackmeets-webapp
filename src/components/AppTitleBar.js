import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import LoginButton from './LoginButton';
import AuthContext from '../contexts/auth/AuthContext';
import UserMenu from './UserMenu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function AppTitleBar() {
  const classes = useStyles();
  const auth = useContext(AuthContext);

  return (   
    <AppBar position="static">
      <Toolbar>
        <Link underline="none" href="/" color="inherit" className={classes.title}>
          <Typography variant="h6">
            Shackmeets
          </Typography>
        </Link>
        {!auth.user && <LoginButton />}
        {auth.user && <UserMenu /> }
      </Toolbar>
    </AppBar>
  );
}
