import React, {useEffect, useState} from "react";


const TickTimer = () => {

    let countDisplay;

    const [count, setCount] = useState(5);
    const [nums, setNums] = useState([1,2,3]);
    console.log("Hello from Loose is in the Functional Component")

    useEffect(() => {
        console.log("I'm in a useEffect")
        setNums([3,2,1]);
    }, []);

    const clickHandler = () => {
        console.log("hello world");
        setCount(count + 1);
    }

    return (
        <div style={{background: "white", height: "100px", color: "black"}}>
            <h1>Hello World</h1>
            {count}
            {countDisplay}
            {nums}
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}

export default  TickTimer;