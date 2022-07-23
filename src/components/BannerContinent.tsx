import { Box, Flex, Text } from "@chakra-ui/react";

interface BannerContinentProps {
  continentName: string;
  bgImg: string;
}

export function BannerContinent ({ continentName, bgImg }: BannerContinentProps) {
  const boxParams = (img: string) => ({
    w: "100%",
    h: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
    px: 4,
    background: `url(/imgs/continent/${img}) center/cover no-repeat`,
  });
  return (
    <Box sx={boxParams(bgImg)}>
      <Flex
        w="80%"
        h="80%"
        align="flex-end"
      >
        <Text
          fontSize="4xl"
          fontWeight="500"
          w="426px"
        >
          {continentName}
        </Text>
      </Flex>
    </Box>
  );
}