import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#083796",
      contrastText: "#fff"
    },
    secondary: {
      main: "#08967D"
    }
  },
  props: {
    MuiButton: {
      variant: "contained",
      color: "primary"
    },
    MuiSelect: {
      variant: "outlined",
      fullWidth: true
    },
    MuiTextField: {
      variant: "outlined",
      fullWidth: true
    },
    MuiFormControl: {
      variant: "outlined",
      fullWidth: true
    }
  }
});

window["theme"] = theme;

export default theme;
