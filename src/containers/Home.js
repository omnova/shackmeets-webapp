import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

import { API } from 'aws-amplify';

import UpcomingMeets from '../components/UpcomingMeets';
import FilterButton from '../components/FilterButton';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }  
}));

export default function Home() {
  const classes = useStyles();
  const [filter, setFilter] = useState('UPCOMING');
  const [meets, setMeets] = useState([]);
  let history = useHistory();

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
      setFilter(newFilter);

      let path = '/';

      // TODO: make better
      if (filter === "ATTENDING")
        path = '/attending';
      else if (filter === "ORGANIZING")
        path = '/organizing';
      else if (filter === "ARCHIVE")
        path = '/archive';

      history.push(path);
    }
  }


  return (   
    <Container maxWidth="md" className={classes.root}>      
      <FilterButton filter={filter} onChange={handleFilterChange} />
      <UpcomingMeets meets={meets}/>
    </Container>
  );
}
