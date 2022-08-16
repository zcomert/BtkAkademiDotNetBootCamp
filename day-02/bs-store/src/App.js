import { useState } from "react";
import data from "./data";

function App() {
  const [names, setNames] = useState(data);
  
  // Arrow (ok)
  const sayHello = () => {
    setNames([]);
    console.log(names);
  };

  const addNumber = (num) => {
    setNames([...names, num])
    console.log(names)
  } 

  const showName = (name) => {
    setNames(names.filter(num => num!==name))
  }
  return (
    <>
      <div>Merhaba React.</div>
      {names.map((num, index) => (
        <div key={index}>
          {num}
          <button onClick={() => showName(num)}>Remove</button>
        </div>
      ))}
      <button onClick={() => sayHello()}>Clear All</button>
      <button onClick={() => addNumber("Betül")}>Add</button>
      <div>
        {names.length}
      </div>
    </>
  );
}

export default App;
