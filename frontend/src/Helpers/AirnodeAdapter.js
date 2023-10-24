import * as adapter from '@api3/airnode-adapter';

export function testConfig(config, apiCredentials, parameters) {

    const ois = config.ois.find((o) => o.title === apiCredentials.oisTitle);
    const endpoint = ois.endpoints.find((endpoint) => endpoint.name === "feed");

    const defaultParameters = endpoint.parameters
        .filter((p) => p.default !== undefined)

    const allParameters = { ...defaultParameters, ...parameters };

    const options = {
        ois: ois,
        endpointName: "feed",
        parameters: parameters,
        apiCredentials: apiCredentials,
        metadata: null,
    }

    const configVal = {
        timeout: 10000,
    }

    console.log("testConfig", parameters);

    try {
        const result = adapter.buildAndExecuteRequest(options, configVal).then((res) => {
            console.log("res", res);
        }).catch((error) => {
            console.log("error", error);
        });

        console.log("testConfig", result);

    } catch (error) {
        console.log("error", error);
    }



}

