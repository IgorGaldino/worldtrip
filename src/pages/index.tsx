import { Center, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { ContinentSlide } from "../components/ContinentSlide";

const Home: NextPage = () => {
  return (
    <VStack
      h="100vh"
      maxWidth="1440px"
      m="0 auto"
      bg="light"
    >
      <Header />
      <VStack w="100%" spacing="5">
        <Banner />
        <TravelTypes />
        <Center
          w="80px"
          h="2px"
          bg="black"
        />
        <Text fontSize="36">Vamos nessa?</Text>
        <Text fontSize="36">Então escolha seu continente</Text>
        <ContinentSlide />
      </VStack>
    </VStack>
  );
};

export default Home;
