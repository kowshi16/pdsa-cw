import CustomAxios from "./customAxios";

export const createNewUser = async (data) => {
  return CustomAxios({
    method: "POST",
    baseURL: "http://localhost:8080",
    url: "/user",
    headers: {},
    data: data,
  })
    .then((res) => {
      console.log("Create new user (res) ===>", res);
      return res;
    })
    .catch((error) => {
      console.log("Create new user (error) ===>", error);
    });
};
