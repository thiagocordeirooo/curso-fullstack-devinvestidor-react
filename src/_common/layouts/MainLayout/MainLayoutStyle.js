import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(7),
    marginLeft: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(8),
      marginLeft: ({ sidebarOpen }) => theme.spacing(sidebarOpen ? 30 : 8)
    },
    transition: theme.transitions.create('margin-left', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

export default useStyles;
