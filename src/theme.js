import { createTheme, responsiveFontSizes } from "@mui/material";
import {
  blue,
  yellow,
  red,
  green,
  grey,
  lightBlue,
} from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: {
      main: "#fb9e00",
    },
    secondary: {
      main: "#20b2aa",
      // main: "#20b261",
    },
    warning: {
      main: yellow[500],
    },
    error: {
      main: red[500],
    },
    info: {
      main: grey[600],
    },
    success: {
      main: green[700],
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
  },
  typography: {
    //apply font family
    fontFamily: "Montserrat",
    // fontWeightBold: 500,
    // fontWeightLight: 300,
    // fontWeightMedium: 500,
    // fontWeightRegular: 300,
    htmlFontSize: 16,
    fontSize: 16,
    //apply font and style to all headers
    h1: {
      fontSize: "5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "4rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "16px",
      fontWeight: "normal",
    },
    body2: {
      fontSize: "13px",
      fontWeight: "normal",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "normal",
    },
    subtitle2: {
      fontSize: "15px",
      fontWeight: "normal",
    },
  },
});

//this is used to make font sizes responsive on different screens
theme = responsiveFontSizes(theme);

export default theme;
