import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("dew");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [count]);

  console.log(data);
  return (
    <>
      <div></div>
      <h1>Vite + React {data.name}</h1>
      <div className="card">
        <h3>{count}</h3>
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
        <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
        <p>{name}</p>
        <button type="button" onClick={() => setName("narongrit")}>
          Update Name
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
