import makeStyles from "@material-ui/core/styles/makeStyles";
import { useContext } from "react";
import { MainLayoutContext } from "./context/MainLayoutContext";
import Header from "./Header";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(3, 3),
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(8),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(8),
      marginLeft: ({ sidebarOpen }) => theme.spacing(sidebarOpen ? 30 : 8)
    },
    transition: theme.transitions.create("margin-left", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

const MainLayout = ({ children }) => {
  const { sidebarOpen } = useContext(MainLayoutContext);
  const classes = useStyles({ sidebarOpen });

  return (
    <>
      <Header />
      <Sidebar />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default MainLayout;
