import React from "react";
import { Text, Flex, Spacer, VStack, Button } from "@chakra-ui/react";
import { ColorRing } from "react-loader-spinner";
import { COLORS } from "../data/constants";

const Hero = ({
  isLoading,
  header,
  onClick,
  buttonText,
  buttonVisibility = true,
}) => {
  return (
    <VStack p={3} alignItems={"left"} bgColor={COLORS.title}>
      <Flex alignItems={"center"}>
        <Text fontWeight={"bold"} size={"lg"}>
          {header}
        </Text>
        <Spacer />
        <ColorRing
          height="32px"
          width="32px"
          radius="9"
          color="green"
          ariaLabel="loading"
          visible={isLoading}
        />
        {!buttonVisibility ? null : (
          <Button height={"24px"} colorScheme="orange" size="sm" onClick={onClick}>
            {buttonText}
          </Button>
        )}
      </Flex>
    </VStack>
  );
};

export default Hero;
