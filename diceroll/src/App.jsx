import { useState } from "react";
import "./App.css";
import Dice from "./component/Dice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Dice />
    </>
  );
}

export default App;
