import { VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BannerContinent } from "../components/BannerContinent";
import { Cities } from "../components/Cities";
import { ContinentInfo } from "../components/ContinentInfo";

export default function Continent() {
  const router = useRouter();
  const { continent, img } = router.query;
  console.log("router", router);
  return (
    <>
      {continent && (
        <VStack
          w="100%"
          h="100%"
          gap="2rem"
          bgColor="light"
        >
          <BannerContinent
            continentName={continent as string}
            bgImg={img as string}
          />
          <VStack
            w="70%"
            gap="2rem"
          >
            <ContinentInfo />
            <Cities />
          </VStack>
        </VStack>
      )}
    </>
  );
}
