import React, {useEffect, useState} from "react";


const TickTimer = () => {

    let countDisplay;

    const {count, setCount} = useState(5);
    const {nums, setNums} = useState([1,2,3]);
    console.log("Hello World")

    useEffect(() => {
        countDisplay = count;
    }, []);

    const clickHandler = () => {
        console.log("hello world");
    }

    return (
        <div style={{background: "white", height: "100px", color: "black"}}>
            {`${countDisplay}`}
            {count}
            {nums}
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}

export default  TickTimer;