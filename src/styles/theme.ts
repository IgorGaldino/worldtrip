import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    background: "#1D1D1D",
    dark: "#47585B",
    light: "#F5F8FA",
    highlight: "#FFBA08"
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "background",
        color: "dark",
      },
    },
  },
});
