//given by materail ui
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f3ecf1", // YELLOW COLOR
    },
    secondary: {
      main: "#743d72", // BLACK COLOR
      secondary_300:"#eeeeee",
      secondary_400:"#480765",
      secondary_600:"#6a1067",
      secondary_700:"#743D72",
      secondary_800:"#510C4F",
    },
    accent: {
      main: "#f58220", // GREEN COLOR
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Roboto Serif",
    fontWeightRegular:"400",
    fontWeightMedium:"500",
    fontWeightBold:"700"
  },
});

export default theme;