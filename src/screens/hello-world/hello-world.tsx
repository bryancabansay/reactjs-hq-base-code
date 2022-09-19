import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../models";
import Button from "../../components/button/button";
import { translate } from "../../i18n/translate";

export const HelloWorld = observer(() => {
  const { countStore } = useStores();
  const { count } = countStore;
  const increment = () => countStore.increment();
  const decrement = () => countStore.decrement();
  return (
    <div className="App">
      <header className="App-header">
        <p>{translate("helloWorld.greet")}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p color="white">{`Count: ${count}`}</p>
        <div>
          <Button
            className="side-by-side"
            type="button"
            onClick={increment}
            text="Incredemnt"
          />{" "}
          <Button
            className="side-by-side"
            type="button"
            onClick={decrement}
            text="Decrement"
          />
        </div>
      </header>
    </div>
  );
});
