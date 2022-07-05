import { VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <VStack
      w="100vw"
      h="100vh"
      maxWidth="1440px"
      m="0 auto"
      bg="light"
    >
      <Header />
      <main>
        <Banner />
      </main>
    </VStack>
  );
};

export default Home;
