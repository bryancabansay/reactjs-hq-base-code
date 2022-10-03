import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const UserStoreModel = types
  .model("User")
  .props({
    firstName: types.optional(types.string, ""),
    lastName: types.optional(types.string, ""),
  })
  .views((self) => ({
    getFullName: () => `${self.firstName} ${self.lastName}`,
    getFirstName: () => self.firstName,
    getLastName: () => self.firstName,
  }))
  .actions((self) => ({
    setFirstName: (firstName: string) => {
      self.firstName = firstName;
    },
    setLastName: (lastName: string) => {
      self.lastName = lastName;
    },
    setNames: (firstName: string, lastName: string) => {
      self.firstName = firstName;
      self.lastName = lastName;
    },
  }));

const DEFAULT_STATE = {
  firstName: "",
  lastName: "",
};

type UserType = Instance<typeof UserStoreModel>;
export interface User extends UserType {}
type UserSnapshotType = SnapshotOut<typeof UserStoreModel>;
export interface UserSnapshot extends UserSnapshotType {}
export const createUserDefaultModel = () =>
  types.optional(UserStoreModel, DEFAULT_STATE);
export const getDefaultUserStoreModel = () => DEFAULT_STATE;
