import { Flex, Spacer, VStack, Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { COLORS } from "../data/constants";
import { Text } from "@chakra-ui/react";
import { ApiIntegrationsContext } from "../Context";
import { useContext } from "react";

const IntegrationsRow = ({ integration }) => {

  const { setConfig } = useContext(ApiIntegrationsContext);

  return (
    <VStack cursor={"pointer"} spacing={0} direction="row" align="left"
      onClick={() => setConfig((integration))}>
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

                <Button colorScheme={"orange"} p={2} fontSize={"sm"} h={"30px"} w={"100px"} onClick={() => { setConfig((integration)) }}> View </Button>

                <Button colorScheme={"orange"} p={2} fontSize={"sm"} h={"30px"} w={"100px"} onClick={() => { setConfig((integration)) }}> Compare </Button>
              </Stack>
            </Flex>


        }

      </Stack>
    </VStack>
  );
};

export default IntegrationsRow;
