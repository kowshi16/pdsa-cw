import CustomAxios from "./customAxios";

export const getDistances = async () => {
    return CustomAxios({
        method: "GET",
        baseURL: "http://localhost:9090",
        url: "/minimum-connector/v1/get/distances",
        headers: {},
        params: {}
    })
    .then((res) => {
        console.log("Get random distances (res) ===>", res);
        return res;
    })
    .catch((error) => {
        console.log("Get random distances (error) ===>", error);
    });
};

export const findMinimumConnector = async (data) => {
    return CustomAxios({
        method: "POST",
        baseURL: "http://localhost:9090",
        url: "/minimum-connector/v1/find/minimum-connector",
        headers: {},
        data: data
    })
    .then((res) => {
        console.log("Find Minimum Connector (res) ===>", res);
        return res;
    })
    .catch((error) => {
        console.log("Find Minimum Connector (error) ===>", error);
    });
};