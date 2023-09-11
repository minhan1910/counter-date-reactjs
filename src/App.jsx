/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function getMessageFromCounter() {
    let todayMsg = <Fragment>{date.toDateString()}</Fragment>;

    if (count === 0) {
      return <Fragment>Today is {todayMsg}</Fragment>;
    }

    if (count > 0) {
      return (
        <Fragment>
          {count} days from {todayMsg}
        </Fragment>
      );
    }

    return (
      <Fragment>
        {-count} days ago was {todayMsg}
      </Fragment>
    );
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="counters"
    >
      <div className="counter">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div className="counter">
        <button className="btn" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          style={{ padding: "0.5rem", margin: "0 1rem" }}
        />
        <button className="btn" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>

      <div className="message">{getMessageFromCounter()}</div>

      {(count !== 0 || step !== 1) ? (
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      ) : null}
    </div>
  );
}

export default App;
