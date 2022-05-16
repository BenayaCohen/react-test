import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtenColor] = useState("red");
  const [disable, setDisable] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        disabled={disable}
        style={{ backgroundColor: disable ? "gray" : buttonColor }}
        onClick={() => setButtenColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disable}
        onChange={(e) => setDisable(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
