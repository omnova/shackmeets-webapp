import React from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'


export default function AddMeetButton() {
  const handleClick = event => {
    
  };


  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        onClick={handleClick}
      >
        Add Meet
      </Button>
    </React.Fragment>
  );
}
