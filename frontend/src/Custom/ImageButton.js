import { Flex, VStack } from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";

const Hero = ({
    onClick,
    src,
    inW = "150px",
    outW = "150px",
    isSelected = false,
    isDisabled = false,
}) => {
    return (
        <VStack
            onClick={isDisabled ? () => { } : () => onClick()}
            cursor={"pointer"}
            spacing={0}
            direction="row"
            align="left"
        >
            <Box alignItems={"center"} width={outW} height={outW}>
                <Flex
                    justify={"center"}
                    bgColor={isSelected ? "green.100" : "white"}
                    width={outW}
                    height={outW}
                    borderRadius={"sm"}
                    boxShadow="xs"
                    border={"1px"}
                    borderColor={"gray.200"}
                    alignItems={"center"}
                >
                    <Image src={src} width={inW} height={inW} />
                </Flex>
            </Box>
        </VStack>
    );
};

export default Hero;
