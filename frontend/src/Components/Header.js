import { Flex, Text, Image } from "@chakra-ui/react";
import { COLORS, CONSTANTS } from "../data/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex
      width={"100%"}
      height={"90px"}
      bg={COLORS.header}
      boxShadow={CONSTANTS.boxShadowSolid}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Flex as="header" align="center" justify="space-between" p={4}>
        <Flex align="flex-start" cursor="pointer" gap={"12px"}>
          <Image src={`/logo.svg`} width={"25px"} height={"25px"} />
          <Text fontWeight={"bold"} size="lg">
            API Integrations Tool
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
