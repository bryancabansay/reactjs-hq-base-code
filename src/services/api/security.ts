import axios from "axios";
import { log } from "../../config";

export const login = async (username: string, password: string) => {
  return await axios
    .post("http://test/com", { username, password })
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      log("Unable to login: ", error);
      return null;
    });
};
