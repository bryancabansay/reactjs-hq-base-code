import { axiosInstance } from "../axios/axios-instance";
import { log } from "../../../utils";

export const login = async (username: string, password: string) => {
  return await axiosInstance
    .post("/login", { username, password })
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      log("Unable to login: ", error);
      return null;
    });
};
