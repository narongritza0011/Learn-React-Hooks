import { useEffect, useState, useRef } from "react";
import "./App.css";
// การใช้ useRef

function App() {
  //   const [inputValue, setInputValue] = useState("");
  //   const count = useRef(0);

  //   useEffect(() => {
  //     count.current = count.current + 1;
  //   });

  //   console.log(count);

  //   const inputElement = useRef();
  //   const focusInput = () => {
  //     inputElement.current.focus();
  //   };

  //3

  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  return (
    <>
      {/* <input type="text" ref={inputElement} />
      <button onClick={focusInput}>focus Input</button> */}
      {/* <h1>Render Count: {count.current}</h1> */}

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value : {inputValue}</h2>
      <h2>Previous Value : {previousInputValue.current}</h2>
    </>
  );
}

export default App;
