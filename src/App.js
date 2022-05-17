import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, " $1")
}

function App() {
  const [buttonColor, setButtenColor] = useState("MediumVioletRed");
  const [disable, setDisable] = useState(false);
  const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  return (
    <div>
      <button
        disabled={disable}
        style={{ backgroundColor: disable ? "gray" : buttonColor }}
        onClick={() => setButtenColor(newButtonColor)}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
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
