import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    button: {
      borderRadius: 0
    },
  },
  palette: {
    primary: {
      main: "#0079bf",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
