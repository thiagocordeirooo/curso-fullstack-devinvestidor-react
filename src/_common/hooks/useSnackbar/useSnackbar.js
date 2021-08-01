import { useContext } from "react";
import { SnackbarContext } from "_common/components/Snackbar/context/SnackbarContext";

export default function useSnackbar() {
  const { setSnackbarState } = useContext(SnackbarContext);

  const snackbar = (message) => setSnackbarState({ open: true, message });

  const snackbarSuccess = (message = "Operação efetuada com sucesso!") => setSnackbarState({ open: true, message });
  const snackbarError = (message = "Ops! Ocorreu um erro, tente novamente!") => setSnackbarState({ open: true, message });

  return { snackbar, snackbarSuccess, snackbarError };
}
