import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});


const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.light
  },
  dialog: {
    backgroundColor: theme.palette.background.light
  }
}));

function BasicDialog(props) {
  const title = props.title;
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={props.onCloseHandler}
      TransitionComponent={Transition}
      PaperProps={{className: classes.dialog}}
    >
      <AppBar position="sticky" className={classes.header} elevation={2}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Close" onClick={props.onCloseHandler}>
            <ChevronLeftIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </Dialog>
  );
}

export default BasicDialog;
