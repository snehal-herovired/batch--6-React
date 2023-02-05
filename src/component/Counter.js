import React, { useState} from 'react';
// import { useState } from 'react';
const Counter = () => {
    //      statevaraible,statefunction
    const [counter, setCounter] = useState(0)

    function increment() {
        // setCounter(counter+1)
        setCounter((prev) => {
            console.log(prev,"this is is preious values")
            return prev+1
        })
    }
    function decrement() {
        setCounter((prev) => {
            console.log(prev,"this is is preious values")
            return prev-1
        })
    }
    return (
        <div>
            <button onClick={increment}>+</button>
            <p>{ counter}</p>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counter;

