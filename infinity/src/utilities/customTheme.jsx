import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    primary: {
      50: "#fefae0",
      100: "#faedcd",
      200: "#d4a373",
      300:"#a98467"
      // ... define other shades of the primary color
    }
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Roboto, sans-serif",
  },
});

export default customTheme;
