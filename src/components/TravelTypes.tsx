import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  const types = [
    { label: "vida noturna", icon: "/imgs/cocktail.svg" },
    { label: "praia", icon: "/imgs/surf.svg" },
    { label: "moderno", icon: "/imgs/building.svg" },
    { label: "clássico", icon: "/imgs/museum.svg" },
    { label: "e mais...", icon: "/imgs/earth.svg" },
  ]

  return (
    <Flex
      w="100%"
      justify="space-evenly"
      wrap="wrap"
    >
      {types.map(type => (
        <Flex
          key={type.label}
          direction={isWideVersion ? "column" : "row"}
          alignItems="center"
          gap="5"
        >
          {isWideVersion ? (
            <Image src={type.icon} alt={type.label} />
          ) : (
            <Image src="/imgs/dot.svg" alt="dot" />
          )}
          <Text
            fontWeight="600"
          >
            {type.label}
          </Text>
        </Flex>
      ))}
    </Flex>
  )
}
