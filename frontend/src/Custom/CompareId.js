import { COLORS } from "../data/constants";
import { Text, Flex, Spacer, Box } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const CompareId = ({ onClick, text, header }) => {
    return (
        <Box width={"50%"} bgColor={COLORS.main}>
            <Flex bgColor={COLORS.info} p={2} alignItems={"center"} justifyItems={"center"} >
                <Text fontWeight={"bold"} width={"100%"}>
                    {header}
                </Text>
                <Spacer />
                <CloseIcon cursor={"pointer"} onClick={() => { onClick() }} />
            </Flex>
            <Flex p={2} alignItems={"center"} justifyItems={"center"} >
                <Text textAlign={"center"} width={"100%"} fontSize={"sm"} fontWeight={"bold"} >{text}</Text>
            </Flex>
        </Box>
    )
};

export default CompareId;
