import { Center, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { ContinentSlide } from "../components/ContinentSlide";

const Home: NextPage = () => {
  return (
    <VStack w="100%" spacing="5">
      <Banner />
      <TravelTypes />
      <Center w="80px" h="2px" bg="black" />
      <Text fontSize={["2xl", "3xl", "4xl"]} textAlign="center">
        Vamos nessa?
      </Text>
      <Text fontSize={["2xl", "3xl", "4xl"]} textAlign="center">
        Então escolha seu continente
      </Text>
      <ContinentSlide />
    </VStack>
  );
};

export default Home;
