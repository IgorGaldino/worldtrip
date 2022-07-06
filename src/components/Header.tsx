import { Flex, Image } from "@chakra-ui/react";
import React from "react";

export function Header () {
  return (
    <Flex
      as="header"
      align="center"
    >
      <Image
        src="/imgs/logo.svg"
        alt="logo"
        w="150px"
        h="100px"
      />
    </Flex>
  );
}
