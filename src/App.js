import CssBaseline from "@material-ui/core/CssBaseline";
import Snackbar from "_common/components/Snackbar";
import { SnackbarContextProvider } from "_common/components/Snackbar/context/SnackbarContext";
import MainRoutes from "./main.routes";

function App() {
  return (
    <>
      <SnackbarContextProvider>
        <CssBaseline />
        <MainRoutes />
        <Snackbar />
      </SnackbarContextProvider>
    </>
  );
}

export default App;
