import { DEV_MODE } from "../../config";

// This is a test config file
export const log = (message?: any, ...optionalParams: any[]) => {
  if (DEV_MODE) {
    console.log(message, optionalParams);
  }
};
