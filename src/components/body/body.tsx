import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../models";

export const Body = observer(() => {
  const { userStore } = useStores();
  const { firstName, lastName, setFirstName, setLastName } = userStore;

  return (
    <div>
      First Name:{" "}
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      Last Name:{" "}
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </div>
  );
});
