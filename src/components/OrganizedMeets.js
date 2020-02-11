import React from 'react';
import MeetCard from './MeetCard';


export default function OrganizedMeets(props) {
  const meets = props.meets;
  const meetCards = meets.map(meet => <MeetCard key={meet.id} meet={meet} />);

  return (   
    <div>
      {meetCards}
    </div>
  );
}
