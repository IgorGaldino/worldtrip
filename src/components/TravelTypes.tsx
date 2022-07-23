import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export function TravelTypes() {

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
    >
      {types.map(type => (
        <Flex
          key={type.label}
          direction="column"
          alignItems="center"
          gap="5"
        >
          <Image src={type.icon} alt={type.label} />
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
