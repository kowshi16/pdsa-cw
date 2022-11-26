import CustomAxios from "./customAxios";

export const getWeights = async () => {
  return CustomAxios({
    method: "GET",
    baseURL: "http://localhost:9090",
    url: "/maximum-profit/v1/get/weights",
    headers: {},
    params: {},
  })
    .then((res) => {
      console.log("Get random weights (res) ===>", res);
      return res;
    })
    .catch((error) => {
      console.log("Get random weights (error) ===>", error);
    });
};

export const getProfits = async () => {
  return CustomAxios({
    method: "GET",
    baseURL: "http://localhost:9090",
    url: "/maximum-profit/v1/get/profit",
    headers: {},
    params: {},
  })
    .then((res) => {
      console.log("Get random profits (res) ===>", res);
      return res;
    })
    .catch((error) => {
      console.log("Get random profits (error) ===>", error);
    });
};

export const knapsackProblem = async (data) => {
  return CustomAxios({
    method: "POST",
    baseURL: "http://localhost:9090",
    url: "/maximum-profit/v1/knapsack",
    headers: {},
    data: data,
  })
    .then((res) => {
      console.log("Knapsack Problem (res) ===>", res);
      return res;
    })
    .catch((error) => {
      console.log("Knapsack Problem (error) ===>", error);
    });
};
