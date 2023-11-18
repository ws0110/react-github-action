import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <div>
          <button
            data-testid="minus-btn"
            onClick={() => setCount((prev) => prev - 1)}
            disabled={disabled}
          >
            -
          </button>
          <button
            data-testid="plus-btn"
            onClick={() => setCount((prev) => prev + 1)}
            disabled={disabled}
          >
            +
          </button>
        </div>
        <div>
          <button
            style={{ backgroundColor: "blue" }}
            data-testid="on/off-btn"
            onClick={() => setDisabled(true)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
