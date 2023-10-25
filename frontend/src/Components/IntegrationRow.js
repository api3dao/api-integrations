import { Flex, Spacer, VStack, Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { COLORS } from "../data/constants";
import { Text } from "@chakra-ui/react";
import { ApiIntegrationsContext } from "../Context";
import { useContext, useState } from "react";

const IntegrationsRow = ({ integration }) => {

  const { setConfig, setComparePair, comparePair } = useContext(ApiIntegrationsContext);
  const [side, setSide] = useState(null);

  const compare = () => {

    if (side === "left") {
      setComparePair({ left: null, right: comparePair.right });
      setSide(null);
      return;
    }

    if (side === "right") {
      setComparePair({ left: comparePair.left, right: null });
      setSide(null);
      return;
    }

    if (comparePair.left === null) {
      setComparePair({ left: integration, right: comparePair.right });
      setSide("left");
      return;
    }

    if (comparePair.right === null) {
      setComparePair({ left: comparePair.left, right: integration });
      setSide("right");
      return;
    }
  }

  const isCompareAvailable = () => {
    if (comparePair.left === null) {
      return true;
    }

    if (comparePair.right === null) {
      return true;
    }

    return false;
  }

  return (
    <VStack spacing={0} direction="row" align="left">
      <Stack
        p={3}
        border={"1px"}
        borderColor={COLORS.main}
        bgColor={COLORS.table}
        width={"100%"}
        height={"55px"}
        alignItems={"left"}
        spacing={"10"}
      >
        {
          integration === null ?
            <Text fontSize={"md"} fontWeight={"bold"}>
              Not available
            </Text>
            :

            <Flex >
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={10}
              >

                <Text fontSize={"md"} fontWeight={"bold"}>
                  {integration.stage}
                </Text>
                <Text p={1} bgColor={"blue"} borderRadius={"lg"} fontSize={"xs"} color={"white"}>Candidate</Text>
                <Text p={1} fontSize={"xs"} >Pusher 0.0.1</Text>

              </Stack>
              <Spacer />
              <Stack direction={"row"}>
                <Button colorScheme={"telegram"} p={2} fontSize={"sm"} h={"30px"} w={"80px"} onClick={() => { setConfig((integration)) }}> View </Button>
                <Button isDisabled={!isCompareAvailable()} colorScheme={side != null ? "orange" : "telegram"} p={2} fontSize={"sm"} h={"30px"} w={"80px"} onClick={() => { compare() }}>{side != null ? "Remove" : "Compare"}</Button>
              </Stack>
            </Flex>


        }

      </Stack>
    </VStack>
  );
};

export default IntegrationsRow;
