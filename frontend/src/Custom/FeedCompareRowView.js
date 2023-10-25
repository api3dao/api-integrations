import { Text, Flex, VStack, Spacer } from "@chakra-ui/react";
import { CopyBlock, dracula } from "react-code-blocks";
import { formatCode } from "../Helpers/Utils";
import { getPath } from "../Helpers/Utils";
import { useState } from "react";

const FeedCompareRowView = ({ feed, oldServers, newEndpoint, oldEndpoint, newServers }) => {
  const [error, setError] = useState(null);

  return (
    <VStack alignItems={"left"} spacing={4} p={5} width={"100%"}>
      <VStack
        bgColor={"yellow.200"}
        alignItems={"left"}
        spacing={4}
        p={2}
        width={"100%"}
      >
        <Text bgColor={"yellow.400"} p={2} fontSize={"md"} fontWeight={"bold"}>
          [DEPRECATED]
        </Text>
        <Text fontSize={"md"} fontWeight={"bold"}>
          HTTP Request
        </Text>
        <Flex>
          <Text bgColor={"gray.300"} p={2} fontSize={"sm"} fontWeight={"bold"}>
            GET
          </Text>
          <Text bgColor={"gray.200"} p={2} fontSize={"sm"}>
            {error !== null ? "error" : getPath(oldEndpoint.parameters, feed.oldFeed, oldServers, setError).url}
          </Text>
        </Flex>
        <Text fontSize={"md"} fontWeight={"bold"}>
          Post Processing
        </Text>

        <CopyBlock
          text={formatCode(feed.oldFeed.code)}
          language={"javascript"}
          showLineNumbers={true}
          theme={dracula}
          codeBlock={true}
        />
      </VStack>

      <VStack
        bgColor={"green.200"}
        alignItems={"left"}
        spacing={4}
        p={2}
        width={"100%"}
      >
        <Text bgColor={"green.400"} p={2} fontSize={"md"} fontWeight={"bold"}>
          [ACTIVE]
        </Text>
        <Text fontSize={"md"} fontWeight={"bold"}>
          HTTP Request
        </Text>
        <Flex>
          <Text bgColor={"blue.300"} p={2} fontSize={"sm"} fontWeight={"bold"}>
            GET
          </Text>
          <Text bgColor={"blue.200"} p={2} fontSize={"sm"}>
            {error !== null ? "error" : getPath(newEndpoint.parameters, feed.newFeed, newServers, setError).url}
          </Text>
          <Spacer />
        </Flex>
        <Text fontSize={"md"} fontWeight={"bold"}>
          Post Processing
        </Text>

        <CopyBlock
          text={formatCode(feed.newFeed.code)}
          language={"javascript"}
          showLineNumbers={true}
          theme={dracula}
          codeBlock={true}
        />
      </VStack>
    </VStack>
  );
};

export default FeedCompareRowView;
