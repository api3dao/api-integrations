import { VStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { COLORS } from "../data/constants";
import { Text } from "@chakra-ui/react";
import { ApiIntegrationsContext } from "../Context";
import { useContext } from "react";

const IntegrationsRow = ({ integration }) => {

  const { setConfig } = useContext(ApiIntegrationsContext);

  return (
    <VStack spacing={0} direction="row" align="left"
      onClick={() => setConfig((integration))}>
      <Box
        p={"1"}
        border={"1px"}
        borderColor={COLORS.main}
        bgColor={COLORS.table}
        borderRadius={"10"}
        width={"100%"}
        height={"50px"}
      >
        <Text>{integration.ois[0].title}</Text>
      </Box>
    </VStack>
  );
};

export default IntegrationsRow;
