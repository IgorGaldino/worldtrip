import { Box, Flex, Text } from "@chakra-ui/react";

export function BannerContinent() {
  const boxParams = () => ({
    w: ["375px", "100%"],
    minHeight: ["150px", "500px"],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
    px: 4,
    background: "url(/imgs/continent/europe.svg) center/cover no-repeat",
  });
  return (
    <Box sx={boxParams()}>
      <Flex
        w="80%"
        h="80%"
        justify={["center", "flex-start"]}
        align={["center", "flex-end"]}
      >
        <Text
          fontSize={["3xl", "4xl"]}
          fontWeight="500"
        >
          Europe
        </Text>
      </Flex>
    </Box>
  );
}
