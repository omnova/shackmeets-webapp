import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

import { API } from 'aws-amplify';

import UpcomingMeets from '../components/UpcomingMeets';
import FilterButton from '../components/FilterButton';
import OrganizedMeets from '../components/OrganizedMeets';
import AttendingMeets from '../components/AttendingMeets';
import PastMeets from '../components/PastMeets';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }  
}));

export default function Home() {
  const classes = useStyles();
  let location = useLocation();
  let history = useHistory();

  let filter = 'UPCOMING';

  if (location.pathname === "/attending")
    filter = 'ATTENDING';
  else if (location.pathname === "/organizing")
    filter = 'ORGANIZING';
  else if (location.pathname === "/archive")
    filter = 'ARCHIVE';  

  const [meets, setMeets] = useState([]);

  useEffect(() => {
    const loadMeets = () => {
      let apiName = 'ShackmeetsApi';
      let path = '/meets'; 
      
      // TODO: make better
      if (filter === "ATTENDING")
        path += '/attending';
      else if (filter === "ORGANIZING")
        path += '/organizing';
      else if (filter === "ARCHIVE")
        path += '/archive';

      API.get(apiName, path).then(response => {
        console.log(response);

        setMeets(response);
      }).catch(error => {
        console.log(error.response)
      });
    };

    loadMeets();
  }, [filter]);


  const handleFilterChange = (newFilter) => {
    if (filter !== newFilter) {
      let path = '/';

      // TODO: make better
      if (newFilter === "ATTENDING")
        path = '/attending';
      else if (newFilter === "ORGANIZING")
        path = '/organizing';
      else if (newFilter === "ARCHIVE")
        path = '/archive';

      history.push(path);
    }
  }


  return (   
    <Container maxWidth="md" className={classes.root}>      
      <FilterButton filter={filter} onChange={handleFilterChange} />
      {filter === "UPCOMING" && <UpcomingMeets meets={meets}/>}
      {filter === "ATTENDING" && <AttendingMeets meets={meets}/>}
      {filter === "ORGANIZING" && <OrganizedMeets meets={meets}/>}
      {filter === "ARCHIVE" && <PastMeets meets={meets}/>}
    </Container>
  );
}
