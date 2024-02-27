/* eslint-disable react/prop-types */

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        if (count < 1) {
            setCount(count);
        } else {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <h1> Count value is: {count} </h1>
            <button onClick={increment}> increment </button>
            <button onClick={decrement}> decrement </button>
        </div>
    );
}