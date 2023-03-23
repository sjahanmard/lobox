import { ReactNode } from "react";
import { ThemeProvider } from "react-jss";

export const theme = {
  colors: {
    primary: {
      main: "#8394D0",
      light: "#F2F4FF",
    },
    gray: {
      text: "#98999F",
      thumb: "#C5C4CA",
      icons: "#8F9498",
    },
  },
};

export const AppThemeProvider = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
