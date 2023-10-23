import { VStack, Flex } from "@chakra-ui/react";
import { COLORS } from "../data/constants";
import Title from "../Custom/Title";
import ApiProvider from "./ApiProvider";

const Welcome = () => {

  const allFiles = (ctx => {
    let keys = ctx.keys();
    let values = keys.map(ctx);

    let apis = [];

    for (let i = 0; i < keys.length; i++) {
      const api = keys[i].split("/")[1];
      const value = values[i];

      const date = keys[i].match(/(\d{4}-\d{2}-\d{2})/g);
      const isExist = apis.find((item) => item[api]);

      if (isExist) {
        isExist[api].deployments.push({ [date[0]]: value });
        continue;
      }

      const obj = {
        [api]: {
          deployments: [
            {
              [date[0]]: value
            }
          ]
        }
      };
      apis.push(obj);
    }
    return apis;
  })(require.context('../../../data/apis/', true, /pusher.json/));

  return (
    <Flex spacing={4} height={"100vh"} overflow={"scroll"}>
      <VStack
        spacing={4}
        width={"100%"}
        alignItems={"center"}
        justifyItems={"stretch"}
      >
        <VStack
          p={3}
          bgColor={COLORS.table}
          borderRadius={"sm"}
          boxShadow="md"
          spacing={4}
          width={"80vw"}
          maxWidth={"1000px"}
          alignItems={"left"}
          justifyItems={"center"}
        >
          <Title
            header={"API Providers"}
            buttonVisibility={false}
            isLoading={false}
          />
          <Flex justifyContent={"center"} direction={"row"} wrap={"wrap"}>
            {
              allFiles.map((integration, index) => (
                <ApiProvider key={index} integration={integration} />
              ))
            }
          </Flex>
        </VStack>
        <VStack h={"300px"} />

      </VStack>
      <VStack h={"300px"} />
    </Flex>
  );
};

export default Welcome;
