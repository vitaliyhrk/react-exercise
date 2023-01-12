import { useState } from "react";
import Counter from "./components/Counter";

import styles from "./App.module.css";

function App() {
  const [counter1Value, setCounter1Value] = useState(0);
  const [counter2Value, setCounter2Value] = useState(0);
  const [counter3Value, setCounter3Value] = useState(0);

  const counterValues = [counter1Value, counter2Value, counter3Value];
  const setFunctions = [setCounter1Value, setCounter2Value, setCounter3Value];

  const handleClick = ({ target: { name } }, idx) => {
    setFunctions[idx]((counterValue) => {
      if (name === "increase") {
        return counterValue + 1;
      }
      if (name === "decrease") {
        return counterValue - 1;
      }
    });
  };

  const handleAllClick = ({ target: { name } }) => {
    setFunctions.forEach((setFunction) =>
      setFunction((counterValue) => {
        if (name === "increase-all") {
          return counterValue + 1;
        }
        if (name === "decrease-all") {
          return counterValue - 1;
        }
      })
    );
  };

  return (
    <div className={styles.root}>
      {counterValues.map((counterValue, idx) => (
        <Counter
          key={`counter${idx}`}
          onClick={handleClick}
          counterValue={counterValue}
          number={idx}
        />
      ))}

      <div className={styles.appButtonHolder}>
        <button
          className={styles.appButton}
          name="decrease-all"
          onClick={handleAllClick}
        >
          decrease all
        </button>

        <button
          className={styles.appButton}
          name="increase-all"
          onClick={handleAllClick}
        >
          increase all
        </button>
      </div>
    </div>
  );
}

export default App;
