import { Text, Image, VStack } from "@chakra-ui/react";
import { COLORS, CONSTANTS } from "../data/constants";

const ApiProvider = ({ index, deployments, setDeployments }) => {

    const key = Object.keys(deployments)[0];

    return (
        <VStack key={index} p={3} cursor={"pointer"}>
            <VStack
                minWidth={"200px"}
                height={"200px"}
                bg={COLORS.header}
                boxShadow={CONSTANTS.boxShadowSolid}
                justifyContent={"center"}
                onClick={() => setDeployments(deployments[key])}
            >
                <Image
                    src={`./providers/${key}.png`}
                    fallbackSrc={`./providers/${key}.svg`}
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
