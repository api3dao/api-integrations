
export const getApis = (callback) => {
    const url = "https://fetch.api3dev.com/get/apis";

    fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then((response) => response.json())
        .then((res) => {
            callback(res);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const checkFiles = (ctx => {
    let keys = ctx.keys();
    let values = keys.map(ctx);

    let apis = [];

    let activeDeployment = [];
    let candidateDeployment = [];

    for (let i = 0; i < keys.length; i++) {

        const api = keys[i].split("/")[1];
        const value = values[i];

        const isExist = apis.find((item) => item[api]);

        if (isExist) {
            activeDeployment = isExist[api].activeDeployment;
            candidateDeployment = isExist[api].candidateDeployment;

            if (keys[i].includes("active-deployments")) {
                activeDeployment.push(value);
            } else if (keys[i].includes("candidate-deployments")) {
                candidateDeployment.push(value);
            }

        } else {

            let activeDeployment = [];
            let candidateDeployment = [];

            if (keys[i].includes("active-deployments")) {
                activeDeployment = [value];
            } else if (keys[i].includes("candidate-deployments")) {
                candidateDeployment = [value];
            }

            const obj = {
                [api]: {
                    activeDeployment: activeDeployment,
                    candidateDeployment: candidateDeployment
                }
            };
            apis.push(obj);
        }

    }

    return apis;
})