import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import MeetCard from './MeetCard';


const useStyles = makeStyles(theme => ({
  headerText: {
    marginBottom: theme.spacing(2)
  }
}));


export default function UpcomingMeets(props) {
  const classes = useStyles();
  const meets = props.meets;
  console.log(meets);

  const meetCards = meets.map(meet => <MeetCard key={meet.id} meet={meet} />);

  return (   
    <div>
      <Typography variant="subtitle1" className={classes.headerText}>
        Upcoming Shackmeets
      </Typography>
      {meetCards}
    </div>
  );
}
