import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#083796',
      contrastText: '#fff'
    },
    secondary: {
      main: '#08967D'
    }
  },
  shape: {
    borderRadius: 0
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary'
    }
  }
});

window['theme'] = theme;

export default theme;
