import { axiosInstance, setToken } from "./axios-instance";

describe("set token function", () => {
  it("should set token if present", () => {
    // setup
    const token = "12345";

    // exercise
    setToken(token);

    // verify
    expect(axiosInstance.defaults.headers.common.authorization).toBe(
      `Bearer ${token}`
    );
  });

  it("should remove token if not present", () => {
    // setup
    const token = "";

    // exercise
    setToken(token);

    // verify
    expect(axiosInstance.defaults.headers.common.authorization).toBe(undefined);
  });
});
