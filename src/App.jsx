import { useState } from "react";
import CodeNationLogo from "./CodeNationLogo";
import ReactLogo from "./ReactLogo";
import "./App.css";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>
        <CodeNationLogo />
        Go to the{" "}
        <a href="https://react.dev/learn/tutorial-tic-tac-toe" target="_blank">
          tutorial
        </a>
        <ReactLogo />
      </h2>
      <ul>
        <li>We don't need to do the setup steps</li>
        <li>You're welcome</li>
      </ul>
    </>
  );
}
