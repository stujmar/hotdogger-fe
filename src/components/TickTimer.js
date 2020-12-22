import React, {useEffect, useState} from "react";
import UseInterval from "../utils/UseInterval"

const TickTimer = () => {

    let countDisplay;

    const [count, setCount] = useState(0);
    const [modifier, setModifer] = useState(0);

    console.log("Loose in the Functional Component")

    useEffect(() => {

        console.log("I'm in a useEffect")

    }, []);

    UseInterval(() => {
        setCount(count + 1);
    }, 1000)

    const clickHandler = () => {
        console.log("hello world");
        setCount(count + 1);
      
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