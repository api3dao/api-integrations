import { VStack, Stack } from "@chakra-ui/react";
import { Flex, Image, Text } from "@chakra-ui/react";
import Title from "../Custom/Title";
import NumberedBox from "../Custom/NumberedBox";
import ImageButton from "../Custom/ImageButton";
import { useState } from "react";
import Help from "./Help";
import { CONSTANTS } from "../data/constants";
import { COLORS } from "../data/constants";

import { populateOis } from "../Helpers/DownloadConfig";
import CloudFormation from "../data/cloud-formation.json";

const DeployOptions = ({ configData, AIRNODE_WALLET_MNEMONIC, SECURITY_SCHEME_VALUES, ois }) => {
    const [selected, setSelected] = useState(0);
    const [step, setStep] = useState(0);
    const [remarks, setRemarks] = useState(null);

    const isSuccessful = (res) => {
        if (res.status === false) {
            setRemarks({
                message: res.message,
                color: COLORS.error,
                image: "./error.svg",
            });
        }

        if (res.status === true) {
            setRemarks({
                message: res.message,
                color: COLORS.success,
                image: "./success.svg",
            });
        }

        setTimeout(() => {
            setRemarks(null);
        }, 5000);
    };


    const setMode = (mode) => {
        switch (mode) {
            case CONSTANTS.DOCKER_DEPLOY:
                setSelected(CONSTANTS.DOCKER_DEPLOY);
                setStep(1);
                break;
            case CONSTANTS.CLOUD_FORMATION_DEPLOY:
                setSelected(CONSTANTS.CLOUD_FORMATION_DEPLOY);
                setStep(1);
                break;
            default:
                setStep(0);
                break;
        }
    };

    const selectDownloadMode = () => {
        setRemarks(null);
        populateOis(
            configData,
            AIRNODE_WALLET_MNEMONIC,
            SECURITY_SCHEME_VALUES,
            ois,
            CloudFormation,
            selected,
            isSuccessful
        );
    };

    return (
        <VStack spacing={4} w={"100%"} direction="row" align="left">
            <Title header="Deploy" buttonVisibility={false} isLoading={false} />

            {step < 0 ? null : (
                <>
                    <NumberedBox title={"Select a deployment mode"} number={1} />

                    <Stack direction={"row"} spacing={"2"} justifyContent={"left"}>
                        <ImageButton
                            inW={"50px"}
                            outW={"100px"}
                            onClick={() => setMode(CONSTANTS.CLOUD_FORMATION_DEPLOY)}
                            isSelected={selected === CONSTANTS.CLOUD_FORMATION_DEPLOY}
                            description={null}
                            src={"./cloudFormation.svg"}
                        />
                        <ImageButton
                            inW={"50px"}
                            outW={"100px"}
                            onClick={() => setMode(CONSTANTS.DOCKER_DEPLOY)}
                            isSelected={selected === CONSTANTS.DOCKER_DEPLOY}
                            description={null}
                            src={"./docker.svg"}
                        />
                    </Stack>
                </>
            )}

            {step < 1 ? null : (
                <>
                    <NumberedBox title={"Download files"} number={2} />
                    {remarks === null ? null : (
                        <VStack
                            p={2}
                            bgColor={remarks.color}
                            borderRadius={"md"}
                            alignItems={"left"}
                            width={"100%"}
                        >
                            <Flex>
                                <Image
                                    src={remarks.image}
                                    alt={"error"}
                                    width={"30px"}
                                    height={"20px"}
                                />
                                <Text fontWeight={"bold"} fontSize={"md"}>
                                    {remarks.message}
                                </Text>
                            </Flex>
                        </VStack>
                    )}
                    <ImageButton
                        inW={"50px"}
                        outW={"100px"}
                        onClick={() => selectDownloadMode()}
                        description={null}
                        src={"./download.svg"}
                    />

                    <NumberedBox title={"Deploy Pusher"} number={3} />
                    <Flex>
                        <Help mode={selected} />
                    </Flex>
                </>
            )}
        </VStack>
    );
};

export default DeployOptions;
