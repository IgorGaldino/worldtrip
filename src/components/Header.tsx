import { Box, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Header () {
  const router = useRouter();
  return (
    <Flex
      as="header"
      align="center"
    >
      <Box as="button" onClick={() => router.push("/")}>
        <Image
          src="/imgs/logo.svg"
          alt="logo"
          w={["81px", "100px", "150px"]}
          h={["30px", "50px", "100px"]}
        />
      </Box>
    </Flex>
  );
}
