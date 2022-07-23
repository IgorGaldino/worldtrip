import { ChakraProvider, VStack } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";

import "swiper/css/bundle";
import "../styles/swiper.css";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <VStack
        h="100vh"
        maxWidth="1440px"
        m="0 auto"
        bg="light"
      >
        <Header />
        <Component {...pageProps} />
      </VStack>
    </ChakraProvider>
  );
}

export default MyApp;
