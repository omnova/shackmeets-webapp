import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import AddMeetDialog from '../dialogs/addmeet/AddMeetDialog';


export default function AddMeetButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const handleClick = event => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };


  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        onClick={handleClick}
      >
        Add Shackmeet
      </Button>
      <AddMeetDialog open={isDialogOpen} onClose={handleDialogClose} />
    </React.Fragment>
  );
}
