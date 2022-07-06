import { Center, Divider, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

const Home: NextPage = () => {
  return (
    <VStack h="100vh" maxWidth="1440px" m="0 auto" bg="light">
      <Header />
      <VStack w="100%">
        <Banner />
        <TravelTypes />
      </VStack>
    </VStack>
  );
};

export default Home;
