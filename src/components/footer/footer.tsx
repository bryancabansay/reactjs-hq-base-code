import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../models";

export const AppFooter = observer(() => {
  const { userStore } = useStores();
  return <h1>Goodbye: {userStore.getLastName()}</h1>;
});
