"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      // Applying styles globally
      body: {
        bg: "black", // Setting background color to black
        color: "white", // Setting text color to white
      },
      a: {
        color: "#FAC313",
        textDecoration: "underline",
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
