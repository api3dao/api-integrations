import { Text, Box, Flex } from "@chakra-ui/react";
import { COLORS } from "../data/constants";

const Hero = ({ title, number, margin = 0 }) => {
  return (
    <Flex width={"100%"} direction="row" align="left" m={margin}>
      <Box
        p="2"
        width={"40px"}
        height={"40px"}
        border={"1px"}
        borderColor={COLORS.main}
        bgColor={COLORS.info}
      >
        <Text textAlign={"center"} fontSize={"sm"} fontWeight={"bold"}>
          {number}
        </Text>
      </Box>
      <Box bgColor={COLORS.main} p={2}>
        <Text fontWeight={"bold"} fontSize={"sm"}>
          {title}
        </Text>
      </Box>
    </Flex>
  );
};

export default Hero;
