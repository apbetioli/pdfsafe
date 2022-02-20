import { createTheme } from "@mui/material";

const theme = createTheme({
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
