import { login } from "./security";
import { axiosInstance } from "../axios/axios-instance";
import * as utils from "../../../utils";

describe("Security API", () => {
  it("should correctly return success results", async () => {
    // setup
    const expected = "expected-result";
    axiosInstance.post = jest.fn().mockResolvedValueOnce({ data: expected });
    const url = "/login";
    const username = "username";
    const password = "password";

    // exercise
    const actual = await login(username, password);

    // verify
    expect(actual).toBe(expected);
    const post = axiosInstance.post as jest.Mock;
    expect(post).toHaveBeenCalledTimes(1);
    expect(post.mock.calls[0][0]).toBe(url);
    expect(post.mock.calls[0][1]).toStrictEqual({ username, password });
  });

  it("should correctly return error result", async () => {
    // setup
    axiosInstance.post = jest.fn().mockRejectedValueOnce(null);
    const url = "/login";
    const username = "username";
    const password = "password";

    // exercise
    const actual = await login(username, password);

    // verify
    expect(actual).toBe(null);
    const post = axiosInstance.post as jest.Mock;
    expect(post).toHaveBeenCalledTimes(1);
    expect(post.mock.calls[0][0]).toBe(url);
    expect(post.mock.calls[0][1]).toStrictEqual({ username, password });
  });
});
