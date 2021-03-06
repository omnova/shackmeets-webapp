import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, CardActions, Typography, Button, Divider } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  organizerText: {
    marginBottom: theme.spacing(2)
  } 
}));


export default function MeetCard(props) {
  const classes = useStyles();
  const meet = props.meet;

  return (   
    <Card square variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="h6">
          {meet.title}
        </Typography>
        <Typography variant="body2" className={classes.organizerText} color="textSecondary" gutterBottom>
          Organized by {meet.organizer}
        </Typography>       
        <Typography variant="body2" component="p">
          {meet.description}  
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button size="small" color="primary">RSVP</Button>
      </CardActions>
    </Card>
  );
}
