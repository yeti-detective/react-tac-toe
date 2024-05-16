import { useState, useEffect } from "react";

export default function Square({ turn, reset }) {
  const [mark, setMark] = useState(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setMark(null);
    setClicked(false);
  }, [reset])

  function handleClick() {
    if (!clicked) {
      setClicked(true);
      setMark(turn);
    }
  }

  return (
    <button onClick={handleClick} className="square">
      {mark}
    </button>
  );
}
