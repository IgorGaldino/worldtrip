import { VStack } from "@chakra-ui/react";
import { BannerContinent } from "../components/BannerContinent";
import { Cities } from "../components/Cities";
import { ContinentInfo } from "../components/ContinentInfo";

export default function Continent() {
  return (
    <VStack
      w="100%"
      h="max"
      gap="2rem"
      bgColor="light"
    >
      <BannerContinent />
      <VStack
        w="70%"
        gap="2rem"
      >
        <ContinentInfo />
        <Cities />
      </VStack>
    </VStack>
  );
}
