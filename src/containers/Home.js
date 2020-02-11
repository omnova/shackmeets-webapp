import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

import { API } from 'aws-amplify';

import UpcomingMeets from '../components/UpcomingMeets';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }  
}));

export default function Home() {
  const classes = useStyles();
  const [meets, setMeets] = useState([]);


  useEffect(() => {
    const loadMeets = () => {
      let apiName = 'ShackmeetsApi';
      let path = '/meets';      

      console.log('loading meets');

      API.get(apiName, path).then(response => {
        console.log(response);

        setMeets(response);
      }).catch(error => {
        console.log(error.response)
      });
    };

    loadMeets();
  }, []);

  return (   
    <Container maxWidth="md" className={classes.root}>
      <UpcomingMeets meets={meets}/>
    </Container>
  );
}
