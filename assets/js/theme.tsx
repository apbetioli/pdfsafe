import { createTheme } from "@mui/material";
import { BreakpointOverrides } from "@mui/system";

declare module '@mui/material/styles' {
  interface Theme {
    breakpoints: BreakpointOverrides,
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    breakpoints?: BreakpointOverrides,
    status?: {
      danger?: string;
    };
  }
}

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
