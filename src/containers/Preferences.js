import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }  
}));

export default function Preferences() {
  const classes = useStyles();

  return (   
    <Container maxWidth="md" className={classes.root}>
      
    </Container>
  );
}
