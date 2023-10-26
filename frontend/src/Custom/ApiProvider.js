import { Text, Image, VStack } from "@chakra-ui/react";
import { COLORS, CONSTANTS } from "../data/constants";

const ApiProvider = ({ index, deployments, setProvider }) => {

    const key = Object.keys(deployments)[0];

    return (
        <VStack key={index} p={3} cursor={"pointer"}>
            <VStack
                minWidth={"150px"}
                height={"150px"}
                bg={COLORS.header}
                boxShadow={CONSTANTS.boxShadowSolid}
                justifyContent={"center"}
                onClick={() => setProvider({ header: key, deployments: deployments[key] })}
            >
                <Image
                    src={`./providers/${key}.png`}
                    fallbackSrc={`./providers/${key}.svg`}
                    alt={key}
                    objectFit={"contain"}
                    width={"100px"}
                    height={"100px"}
                />

                <Text fontSize={"xs"} fontWeight={"light"}>
                    {key.toUpperCase()}
                </Text>

            </VStack>
        </VStack>

    );
};

export default ApiProvider;
