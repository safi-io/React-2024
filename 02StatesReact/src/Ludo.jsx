import {useState} from "react"
export default function() {

    let [count, setCount] = useState({blue:0, yellow:0, green:0, red:0})
    let [arr, setArr] = useState(["No Moves YET"]);

    let incBlue = ()=> {
        setCount({...count, blue : count.blue +1});
        arr.push("blue moved");
    }

    let incYellow = ()=>{
        setCount({...count, yellow : count.yellow +1});
        arr.push("yellow moved");
    }
    

    let incGreen = ()=>{
        setCount({...count, green : count.green +1});
        arr.push("green moved");
    }
    

    let incRed = ()=> {
        setCount({...count, red : count.red +1});
        arr.push("red moved");
    }


    return (
    
        <>
            <p>{arr[arr.length-1]}</p>
            <br /><br /><br /><br />
            <p>Blue Moves :- {count.blue}</p>
            <button onClick={incBlue}>+1</button>

            <p>Yellow Moves :- {count.yellow}</p>
            <button onClick={incYellow}>+1</button>

            <p>Green Moves :- {count.green}</p>
            <button onClick={incGreen}>+1</button>

            <p>Red Moves :- {count.red}</p>
            <button onClick={incRed}>+1</button>
        </>
    );
}