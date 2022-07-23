import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export function Cities() {
  const cities = [
    {
      country: "Reino Unido",
      capital: "Londres",
      img: "/imgs/city/london.svg",
      countryIcon: "/imgs/country/united_kingdom.svg",
    },
    {
      country: "França",
      capital: "Paris",
      img: "/imgs/city/paris.svg",
      countryIcon: "/imgs/country/france.svg",
    },
    {
      country: "Roma",
      capital: "Itália",
      img: "/imgs/city/roma.svg",
      countryIcon: "/imgs/country/italy.svg",
    },
    {
      country: "Praga",
      capital: "República Tcheca",
      img: "/imgs/city/prague.svg",
      countryIcon: "/imgs/country/czech_republic.svg",
    },
    {
      country: "Amsterdã",
      capital: "Holanda",
      img: "/imgs/city/amsterdam.svg",
      countryIcon: "/imgs/country/netherlands.svg",
    },
  ];

  return (
    <Stack w="100%" justify="start">
      <Text fontSize="2xl">Cidades +100</Text>
      <Grid templateColumns="repeat(auto-fill, 240px)" gap={4}>
        {cities.map((city) => (
          <GridItem key={city.country}>
            <Box
              w="240px"
              height="279px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={city.img} alt={city.country} />
              <HStack p="3" justify="space-between">
                <Box>
                  <Text>{city.capital}</Text>
                  <Text>{city.country}</Text>
                </Box>
                <Box>
                  <Avatar name={city.country} src={city.countryIcon} />
                </Box>
              </HStack>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}
