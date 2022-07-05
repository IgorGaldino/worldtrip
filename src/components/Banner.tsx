import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

export function Banner() {
  return (
    <HStack bgImage="/background.svg" justify="space-evenly">
      <Flex
        direction="column"
        color="light"
        h="max-content"
      >
          <Text
            fontSize="4xl"
            fontWeight="500"
            w="426px"
          >
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text
            fontSize="xl"
            fontWeight="400"
            w="524px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
      </Flex>
      <Box position="relative" top="10">
        <Image
          src="airplane.svg"
          alt="airplane"
          w="400px"
        />
      </Box>
    </HStack>
  )
}
