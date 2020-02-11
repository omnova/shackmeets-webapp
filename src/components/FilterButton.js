import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'


export default function FilterButton(props) {
  const filter = props.filter;
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
      >
        <MenuItem onClick={() => filterOnChange('UPCOMING')}>Upcoming</MenuItem>
        <MenuItem onClick={() => filterOnChange('ATTENDING')}>Attending</MenuItem>
        <MenuItem onClick={() => filterOnChange('ORGANIZING')}>Organizing</MenuItem>
        <MenuItem onClick={() => filterOnChange('ARCHIVE')}>Archive</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
