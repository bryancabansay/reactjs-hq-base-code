import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const CountStoreModel = types
  .model("Count")
  .props({
    count: types.number,
  })
  .views((self) => ({
    showCountWithLabel: () => `Count (Update) ===>>>> : ${self.count}`,
  }))
  .actions((self) => ({
    increment: () => {
      self.count = self.count + 2;
    },
    decrement: () => {
      self.count = self.count - 5;
    },
  }));

const DEFAULT_STATE = {
  count: 0,
};

type CountType = Instance<typeof CountStoreModel>;
export interface Count extends CountType {}
type CountSnapshotType = SnapshotOut<typeof CountStoreModel>;
export interface CountSnapshot extends CountSnapshotType {}
export const createCountDefaultModel = () =>
  types.optional(CountStoreModel, DEFAULT_STATE);
export const getDefaultCountStoreModel = () => DEFAULT_STATE;
