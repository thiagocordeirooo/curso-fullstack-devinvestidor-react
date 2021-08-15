import MainRoutes from './main.routes';
import { SnackbarContextProvider } from '_common/components/Snackbar/context/SnackbarContext';

function App() {
  return (
    <>
      <SnackbarContextProvider>
        <MainRoutes />
      </SnackbarContextProvider>
    </>
  );
}

export default App;
