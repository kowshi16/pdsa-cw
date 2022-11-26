import CustomAxios from "./customAxios";

export const getDistances = async () => {
  return CustomAxios({
    method: "GET",
    baseURL: "http://localhost:9090",
    url: "/shortest-path/v1/get/distances",
    headers: {},
    params: {},
  })
    .then((res) => {
      console.log("Get random distances (res) ===>", res);
      return res;
    })
    .catch((error) => {
      console.log("Get random distances (error) ===>", error);
    });
};

export const findShortestPath = async (data) => {
  return CustomAxios({
    method: "POST",
    baseURL: "http://localhost:9090",
    url: "/shortest-path/v1/find/shortest-path",
    headers: {},
    data: data,
  })
    .then((res) => {
      console.log("Find Shortest Path (res) ===>", res);
      return res;
    })
    .catch((error) => {
      console.log("Find Shortest Path (error) ===>", error);
    });
};
