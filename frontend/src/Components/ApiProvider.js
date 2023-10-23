import { Text, Image, VStack } from "@chakra-ui/react";
import { COLORS, CONSTANTS } from "../data/constants";

const ApiProvider = ({ integration }) => {

    const key = Object.keys(integration)[0];

    return (
        <VStack p={3} cursor={"pointer"}>
            <VStack
                minWidth={"200px"}
                height={"200px"}
                bg={COLORS.header}
                boxShadow={CONSTANTS.boxShadowSolid}
                justifyContent={"center"}
            >
                <Image
                    src={`./providers/${key}.svg`}
                    fallbackSrc={`./providers/${key}.png`}
                    alt={key}
                    objectFit={"contain"}
                    width={"100px"}
                    height={"100px"}
                />

                <Text fontWeight={"bold"}>
                    {key.toUpperCase()}
                </Text>

            </VStack>
        </VStack>

    );
};

export default ApiProvider;
