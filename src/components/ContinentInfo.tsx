import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, Text, Tooltip } from "@chakra-ui/react";

export function ContinentInfo() {
  return (
    <Flex
      w="100%"
      justify="space-between"
      flexWrap="wrap"
    >
      <Text w="600px" fontSize={["sm", "lg", "xl"]} textAlign="justify">
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Flex gap="5" fontSize="lg" my="5">
        <Flex direction="column" justify="center" align="center">
          <Text color="highlight" fontWeight="semibold" fontSize="4xl">
            50
          </Text>
          <Text fontWeight="semibold" fontSize="xl">
            países
          </Text>
        </Flex>
        <Flex direction="column" justify="center" align="center">
          <Text color="highlight" fontWeight="semibold" fontSize="4xl">
            60
          </Text>
          <Text fontWeight="semibold" fontSize="xl">
            línguas
          </Text>
        </Flex>
        <Flex direction="column" justify="center" align="center">
          <Text color="highlight" fontWeight="semibold" fontSize="4xl">
            27
          </Text>
          <Text fontWeight="semibold" fontSize="xl">
            cidades +100
            <Tooltip label="Mais informações">
              <InfoOutlineIcon ml="2" fontSize="md" />
            </Tooltip>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
