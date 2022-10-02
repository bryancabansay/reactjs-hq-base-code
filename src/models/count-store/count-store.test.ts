import { createCountDefaultModel } from "./count-store";

describe("CountStoreModel", () => {
  it("should correctly increase and decrease count.", () => {
    // setup
    const snapshot = createCountDefaultModel();
    const incrementStore = snapshot.create();
    const decrementStore = snapshot.create();

    // exercise
    incrementStore.increment();
    decrementStore.decrement();

    // verify
    expect(incrementStore.count).toBe(1);
    expect(decrementStore.count).toBe(-1);
  });
});
