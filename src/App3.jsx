import { useEffect, useState, createContext, useContext } from "react";
import "./App.css";
// การใช้ createContext,useContext
const userContext = createContext();

function App() {
  const [user, setUser] = useState("dew");

  return (
    <userContext.Provider value={user}>
      <h1>Parent Component</h1>
      <ChildComponent />
    </userContext.Provider>
  );
}

function ChildComponent() {
  return (
    <>
      <h3>child Component 1</h3>
      <ChildComponent2 />
    </>
  );
}
function ChildComponent2() {
  return (
    <>
      <h3>child Component 2</h3>
      <ChildComponent3 />
    </>
  );
}
function ChildComponent3() {
  return (
    <>
      <h3>child Component 3</h3>
      <ChildComponent4 />
    </>
  );
}
function ChildComponent4() {
  const user = useContext(userContext);
  return (
    <>
      <p>Hello {user}</p>
      <h3>child Component 4</h3>
      <ChildComponent5 />
    </>
  );
}
function ChildComponent5() {
  const user = useContext(userContext);
  return (
    <>
      <h3>child Component 5</h3>
      <p>Hello {user}</p>
    </>
  );
}

export default App;
