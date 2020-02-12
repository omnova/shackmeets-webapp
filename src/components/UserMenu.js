import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Menu, MenuItem } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import AuthContext from '../contexts/auth/AuthContext';


const useStyles = makeStyles(theme => ({
  menu: {
    marginTop: theme.spacing(5)
  }
}));


export default function UserMenu() {
  const classes = useStyles();
  let auth = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigatePreferences = () => {
    setAnchorEl(null);

    
  };

  return (
    <React.Fragment>
      <Button 
        color="primary" 
        variant="contained" 
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {auth.user.username}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        <MenuItem onClick={navigatePreferences}>Preferences</MenuItem>
        <MenuItem onClick={auth.logout}>Log out</MenuItem>       
      </Menu>
    </React.Fragment>
  );
}