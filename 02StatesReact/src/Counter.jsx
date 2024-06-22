import {useState} from "react";

export default function Counter() {

    let [count, setCount] = useState(0);

    let countIncrease = function() {
        setCount(count+1);
    }

    return (
        <button onClick={countIncrease}>Counter:- {count}</button>
    );
}