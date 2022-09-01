import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(55);

  const increase = () => {
    setNumber((x) => {
      console.log(x+1)
      return x+1;
    });
    
  };

  const decrease = () => {
    setNumber(number - 1);
  };

  const setRandom = () => {
    setInterval(() => {
        setNumber(Math.floor(Math.random()*100))
    },1000);
  }

  return (
    <div>
      {number}
      <div>
        <button onClick={() => increase()}> Increase </button>

        <button onClick={() => decrease()}> Decrease </button>

        <button onClick={() => setNumber(0)}>Reset</button>

        <button onClick={() => setRandom()}>
          Random
        </button>
      </div>
    </div>
  );
}
