import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  organizerText: {
    marginBottom: theme.spacing(2)
  } 
}));


export default function MeetCard() {
  const classes = useStyles();

  const meet = {
    title: 'Shackmeet of DOOM!!',
    description: 'Blah blah blah shackmeet!',
    date: '01/20/2099',
    organizer: {
      userId: 1,
      username: 'omnova'
    }
  };

  return (   
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {meet.title}
        </Typography>
        <Typography variant="body2" className={classes.organizerText} color="textSecondary" gutterBottom>
          Organized by {meet.organizer.username}
        </Typography>       
        <Typography variant="body2" component="p">
          {meet.description}  
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">RSVP</Button>
      </CardActions>
    </Card>
  );
}
