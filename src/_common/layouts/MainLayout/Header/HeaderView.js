import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./HeaderStyle";

const Header = ({ handleToggleSidebar }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={handleToggleSidebar}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          Task Organize
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
