import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4a6572',
      main: '#344955',
      dark: '#232f34',
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      //light: '#0066ff',
      main: '#f57f17',
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffffff"
    },
    background: {
      default: '#f1f1f1',
      light: '#f6f6f6'
    }
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
