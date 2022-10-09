import { log } from "./console";
import * as props from "../../config/properties";

let logMock: jest.SpyInstance | null = null;

beforeEach(() => {
  logMock = jest.spyOn(console, "log").mockImplementation() as jest.SpyInstance;
});

afterEach(() => {
  logMock?.mockRestore();
});

describe("log function", () => {
  it("should log if in dev mode", () => {
    // setup
    Object.defineProperty(props, "DEV_MODE", { value: true });
    const expected = "This is a test message";

    // exercise
    log(expected);

    // verify
    expect(logMock).toHaveBeenCalledTimes(1);
    expect(logMock?.mock.calls[0][0]).toBe(expected);
  });

  it("should log if in non-dev mode", () => {
    // setup
    Object.defineProperty(props, "DEV_MODE", { value: false });
    const expected = "This is a test message";

    // exercise
    log(expected);

    // verify
    expect(logMock).toHaveBeenCalledTimes(0);
  });
});
