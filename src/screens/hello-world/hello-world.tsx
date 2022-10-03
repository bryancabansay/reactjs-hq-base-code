import { observer } from "mobx-react-lite";
import { useStores } from "../../models";
import { translate } from "../../i18n/translate";
import { Button } from "antd";

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
        <p id="count-text" color="white">
          {countStore.showCountWithLabel()}
        </p>
        <div>
          <Button id="increment-btn" type="primary" onClick={increment}>
            {translate("helloWorld.increment")}
          </Button>{" "}
          <Button id="decrement-btn" type="primary" onClick={decrement}>
            {translate("helloWorld.decrement")}
          </Button>
        </div>
      </header>
    </div>
  );
});
