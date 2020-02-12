import React, { useState, useContext } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import AuthContext from '../contexts/auth/AuthContext';
import { useHistory } from 'react-router-dom';

export default function UserMenu() {
  let history = useHistory();
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
        startIcon={<AccountCircleIcon />}
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
      >
        <MenuItem onClick={navigatePreferences}>Preferences</MenuItem>
        <MenuItem onClick={auth.logout}>Log out</MenuItem>       
      </Menu>
    </React.Fragment>
  );
}