import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import MeetCard from './MeetCard';


const useStyles = makeStyles(theme => ({
  headerText: {
    marginBottom: theme.spacing(2)
  }
}));


export default function PastMeets() {
  const classes = useStyles();

  return (   
    <div>
      <Typography variant="subtitle1" className={classes.headerText}>
        Past Shackmeets
      </Typography>
      <MeetCard />
    </div>
  );
}
