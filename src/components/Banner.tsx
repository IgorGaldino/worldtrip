import { Box, Flex, HStack, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  const justify =  useBreakpointValue({
    base: "flex-start",
    lg: "space-evenly"
  });

  const paddinSmallVersion = useBreakpointValue({
    base: "4",
    lg: "0"
  });

  return (
    <HStack
      bgImage="/imgs/background.svg"
      justify={justify}
      pl={paddinSmallVersion}
      w="100%"
    >
      <Flex
        direction="column"
        color="light"
        h="max"
      >
          <Text
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="500"
            w="426px"
          >
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text
            fontSize={["md", "lg", "xl"]}
            fontWeight="400"
            width="80%"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
      </Flex>
      {isWideVersion && (
        <Box position="relative" top="10">
            <Image
              src="/imgs/airplane.svg"
              alt="airplane"
              w="400px"
            />
        </Box>
      )}
    </HStack>
  )
}
