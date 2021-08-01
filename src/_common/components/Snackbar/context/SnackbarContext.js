import { createContext, memo, useState } from "react";

export const SnackbarContext = createContext(null);
SnackbarContext.displayName = "SnackbarContext";

export const SnackbarContextProvider = memo(({ children }) => {
  const [snackbarState, setSnackbarState] = useState({ open: false });

  return <SnackbarContext.Provider value={{ snackbarState, setSnackbarState }}>{children}</SnackbarContext.Provider>;
});
