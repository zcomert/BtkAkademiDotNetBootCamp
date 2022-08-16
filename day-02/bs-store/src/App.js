import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([1,2,3,4,5]);
  
  // Arrow (ok)
  const sayHello = () => {
    setNumbers([]);
    console.log(numbers);
  };

  const addNumber = (num) => {
    setNumbers([...numbers, num])
    console.log(numbers)
  } 

  const showNumber = (number) => {
    setNumbers(numbers.filter(num => num!==number))
  }
  return (
    <>
      <div>Merhaba React.</div>
      {numbers.map((num, index) => (
        <div key={index}>
          {num}
          <button onClick={() => showNumber(num)}>button</button>
        </div>
      ))}
      <button onClick={() => sayHello()}>Clear All</button>
      <button onClick={() => addNumber(55)}>Add</button>
      <div>
        {numbers.length}
      </div>
    </>
  );
}

export default App;
