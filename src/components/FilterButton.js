import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Menu, MenuItem, Divider } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import AuthContext from '../contexts/auth/AuthContext';


const useStyles = makeStyles(theme => ({
  menu: {
    marginTop: theme.spacing(6)
  }
}));


export default function FilterButton(props) {
  const classes = useStyles();
  const filter = props.filter;
  let auth = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filterOnChange = (newFilter) => {
    setAnchorEl(null);

    props.onChange(newFilter);
  };

  return (
    <React.Fragment>
      <Button
        variant="text"
        color="primary"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleClick}
      >
        {filter}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        <MenuItem onClick={() => filterOnChange('UPCOMING')}>Upcoming</MenuItem>
        {auth.user && <MenuItem onClick={() => filterOnChange('ATTENDING')}>Attending</MenuItem>}
        {auth.user && <MenuItem onClick={() => filterOnChange('ORGANIZING')}>Organizing</MenuItem>}
        <Divider />
        <MenuItem onClick={() => filterOnChange('ARCHIVE')}>Archive</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
