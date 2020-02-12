import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography, TextField, Button } from '@material-ui/core';

import BasicDialog from '../BasicDialog';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  section: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  cancelButton: {
    marginLeft: theme.spacing(2)
  }
}));


function AddMeetDialog(props) {
  const classes = useStyles();
  

  return (
    <BasicDialog open={props.open} onCloseHandler={props.onClose} title={'Add Shackmeet'}>
      <Container maxWidth="md" className={classes.root}>
        <form>          
          <Typography variant="subtitle1">
            Details
          </Typography>

          <div className={classes.section}>
            <TextField
             id="title" 
             label="Title" 
             fullWidth 
             variant="outlined"
             size="small"
             autoFocus />
          </div>       
          
          <div className={classes.section}>
            <TextField 
              id="description"
              label="Description" 
              fullWidth 
              multiline
              rows="4"
              rowsMax="50"
              size="small"
              variant="outlined"/>
          </div>
          
          <Typography variant="subtitle1">
            Location
          </Typography>

          <div className={classes.section}>
            <TextField
             id="LocationName" 
             label="Name" 
             fullWidth 
             size="small"
             variant="outlined" />
          </div>   

          <div className={classes.section}>
            <TextField
            id="LocationAddress" 
            label="Address" 
            fullWidth 
            multiline
            rows="4"
            size="small"
            variant="outlined" />
          </div> 

          <Button variant="contained" color="primary" onClick={props.onClose}>
            Create
          </Button>

          <Button variant="text" color="secondary" className={classes.cancelButton} onClick={props.onClose}>
            Cancel
          </Button>
        </form>
      </Container>
    </BasicDialog>
  );
}

export default AddMeetDialog;
