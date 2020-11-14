import React, {useState} from "react";
import Button from "./Button.js"

const Playground = ({label}) => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {setCounter(counter+1)}
    return (
        <div>{`${label}`}
        {counter}
        <Button />
        <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Playground;