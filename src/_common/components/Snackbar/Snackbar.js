import { useContext } from 'react';
import SnackbarView from './SnackbarView';
import { SnackbarContext } from './context/SnackbarContext';

const Snackbar = () => {
  const { snackbarState, setSnackbarState } = useContext(SnackbarContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;

    setSnackbarState({ open: false });
  };

  return <SnackbarView open={snackbarState.open} message={snackbarState.message} handleClose={handleClose} />;
};

export default Snackbar;
