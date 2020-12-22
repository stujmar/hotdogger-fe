import React, {useEffect, useState} from "react";
import UseInterval from "../utils/UseInterval"

const TickTimer = () => {

    let countDisplay;

    const [count, setCount] = useState(5);

    console.log("Loose in the Functional Component")

    useEffect(() => {

        console.log("I'm in a useEffect")

        setInterval(() => {
            console.log("Hello from the interval", count);
        }, 1000)

    }, []);

    const clickHandler = () => {
        console.log("hello world");
        setCount(count + 1);
        console.log("UseInterval", UseInterval(5,10));
    }

    return (
        <div style={{background: "white", height: "100px", color: "black"}}>
            <h1>Hello World</h1>
            {count}
            {countDisplay}
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}

export default  TickTimer;