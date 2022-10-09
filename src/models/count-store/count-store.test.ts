import {
  createCountDefaultModel,
  getDefaultCountStoreModel,
  DEFAULT_STATE,
} from "./count-store";

describe("CountStoreModel", () => {
  it("should correctly increase and decrease count", () => {
    // setup
    const snapshot = createCountDefaultModel();
    const incrementStore = snapshot.create();
    const decrementStore = snapshot.create();

    // exercise
    incrementStore.increment();
    decrementStore.decrement();

    // verify
    expect(incrementStore.getCount()).toBe(1);
    expect(decrementStore.getCount()).toBe(-1);
  });

  it("should return correct default state", () => {
    // setup
    // exercise
    const actual = getDefaultCountStoreModel();

    // verify
    expect(actual).toStrictEqual(DEFAULT_STATE);
  });
});
