import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    button: {
      borderRadius: 0
    },
  },
  palette: {
    primary: {
      main: "#5163BA",
    },
    secondary: {
      main: "#4caf50",
      contrastText: "#fff"
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
