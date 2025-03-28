import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    link: Palette['primary'];
  }
  interface PaletteOptions {
    link?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#605748",
    },
    secondary: {
      main: "#71924C",
    },
    background: {
      default: "#FAF8F2",
    },
    link: {
      main: "#9EC670",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
  },
});

export default theme;
