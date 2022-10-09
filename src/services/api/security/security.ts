import { axiosInstance } from "../axios-instance";
import { log } from "../../../config";

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
