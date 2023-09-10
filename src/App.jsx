/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);  

  function getMessageFromCounter() {
    let todayMsg = <>Today is {date.toDateString()}</>;

    if (count === 0) {
      return todayMsg;
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
        <button
          className="btn"
          onClick={() => step > 1 && setStep((s) => s - 1)}
        >
          -
        </button>
        <span>Step: {step}</span>
        <button className="btn" onClick={() => setStep((s) => s + 1)}>
          +
        </button>
      </div>
      <div className="counter">
        <button className="btn" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <span>Count: {count}</span>
        <button className="btn" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>

      <div className="message">{getMessageFromCounter()}</div>
    </div>
  );
}

export default App;
