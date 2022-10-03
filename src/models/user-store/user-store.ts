import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { getCatFact } from "../../services/api/cat";

export const UserStoreModel = types
  .model("User")
  .props({
    firstName: types.optional(types.string, ""),
    lastName: types.optional(types.string, ""),
    catFact: types.optional(types.string, ""),
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
    setCatFact: (fact: string) => {
      self.catFact = fact;
    },
  }))
  .actions((self) => ({
    updateCatFact: async () => {
      let fact = "Server is down";
      try {
        fact = await getCatFact();
      } catch (e) {
        // Left blank
      }
      self.setCatFact(fact);
    },
  }));

const DEFAULT_STATE = {
  firstName: "",
  lastName: "",
  catFact: "",
};

type UserType = Instance<typeof UserStoreModel>;
export interface User extends UserType {}
type UserSnapshotType = SnapshotOut<typeof UserStoreModel>;
export interface UserSnapshot extends UserSnapshotType {}
export const createUserDefaultModel = () =>
  types.optional(UserStoreModel, DEFAULT_STATE);
export const getDefaultUserStoreModel = () => DEFAULT_STATE;
