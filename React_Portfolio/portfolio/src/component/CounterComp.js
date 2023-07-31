import React from 'react';
import { useState } from 'react';

export default function CounterComp(props) {
    const [counter,setCounter] = useState(1);
    const Increment = () =>{
        setCounter(counter + 1);
    };
    const Decrement = () =>{
        setCounter(counter - 1);
    };
    const Multiply = () =>{
        setCounter(counter * 2);
    };
    const Divide = () =>{
        setCounter(counter / 2);
    };

    return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Multiply}>Multiply * 2</button>
      <button onClick={Divide}>Divide / 2</button>
    </div>
  );
}
