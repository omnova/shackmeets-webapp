import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

import LoginDialog from '../dialogs/login/LoginDialog';


export default function LoginButton() {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Button color="secondary" variant="contained" onClick={() => setOpen(true)}>Log in</Button>

      <LoginDialog open={open} onClose={() => setOpen(false)}/>
    </React.Fragment>
  );
}