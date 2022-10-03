import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../models";

export const AppHeader = observer(() => {
  const { userStore } = useStores();
  return <h1>Hello: {userStore.getFullName()}</h1>;
});
