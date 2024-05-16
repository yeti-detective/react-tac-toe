import { useState } from "react";
import Square from "./Square";
import BoardRow from "./BoardRow";
import "./App.css";
import "./styles.css";

let resetCounter = 0;

export default function App() {
  const [turn, setTurn] = useState("X");
  const [reset, setReset] = useState(0)

  const changeValue = () => {
    if (turn === "X") {
      setTurn("O");
    } else {
      setTurn("X");
    }
  };

  return (
    <div onClick={changeValue}>
      <BoardRow turn={turn} reset={reset} />
      <BoardRow turn={turn} reset={reset} />
      <BoardRow turn={turn} reset={reset} />
      <button onClick={() => {setReset(reset + 1)}}>Reset</button>
    </div>
  );
}
