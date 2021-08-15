import Snackbar from '_common/components/Snackbar';
import Header from './Header';
import useStyles from './MainLayoutStyle';
import Sidebar from './Sidebar';

const MainLayoutView = ({ children, sidebarOpen }) => {
  const classes = useStyles({ sidebarOpen });

  return (
    <>
      <Header />
      <Sidebar />
      <main className={classes.main}>{children}</main>
      <Snackbar />
    </>
  );
};

export default MainLayoutView;
