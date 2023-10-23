
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