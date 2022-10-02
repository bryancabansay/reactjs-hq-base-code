/**
 * @jest-environment jsdom
 */
import { HelloWorld } from "./hello-world";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow } from "enzyme";
import * as model from "../../models/root-store/root-store-context";

Enzyme.configure({ adapter: new Adapter() });

describe("HelloWorld", () => {
  it("Should correctly display incremented value.", () => {
    // setup
    const expected = 2;
    const mockStores = {
      countStore: {
        count: expected,
        increment: jest.fn(),
        decrement: jest.fn(),
      },
    };
    const mockFn = jest.fn().mockReturnValue(mockStores);
    Object.defineProperty(model, "useStores", { value: mockFn });

    // exercise
    const wrapper = shallow(<HelloWorld />);
    for (let i = 0; i < expected; i++) {
      wrapper.find({ id: "increment-btn" }).simulate("click");
    }

    // verify
    expect(mockStores.countStore.increment).toHaveBeenCalledTimes(expected);
    expect(mockStores.countStore.decrement).toHaveBeenCalledTimes(0);
    expect(wrapper.find({ id: "count-text" }).text()).toBe(
      `Count: ${expected}`
    );
  });

  it("Should correctly display decremented value.", () => {
    // setup
    const increments = 3;
    const decrements = 5;
    const expected = increments + decrements * -1;
    const mockStores = {
      countStore: {
        count: expected,
        increment: jest.fn(),
        decrement: jest.fn(),
      },
    };
    const mockFn = jest.fn().mockReturnValue(mockStores);
    Object.defineProperty(model, "useStores", { value: mockFn });

    // exercise
    const wrapper = shallow(<HelloWorld />);
    for (let i = 0; i < increments; i++) {
      wrapper.find({ id: "increment-btn" }).simulate("click");
    }

    for (let i = 0; i < decrements; i++) {
      wrapper.find({ id: "decrement-btn" }).simulate("click");
    }

    // verify
    expect(mockStores.countStore.increment).toHaveBeenCalledTimes(increments);
    expect(mockStores.countStore.decrement).toHaveBeenCalledTimes(decrements);
    expect(wrapper.find({ id: "count-text" }).text()).toBe(
      `Count: ${expected}`
    );
  });
});
