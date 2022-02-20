import { createTheme } from "@mui/material";

const theme = {
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
};

//https://dragoshmocrii.com/material-ui-custom-theme-and-typescript/

type CustomTheme = {
  [Key in keyof typeof theme]: typeof theme[Key]
}
declare module '@mui/material/styles' {
  interface Theme extends CustomTheme { }
  interface ThemeOptions extends CustomTheme { }
}


export default createTheme(theme);
