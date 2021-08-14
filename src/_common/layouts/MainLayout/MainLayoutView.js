import Header from './Header';
import useStyles from './MainLayoutStyle';

const MainLayoutView = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default MainLayoutView;
