import React, {useState} from "react";
import Button from "./Button.js"
import PlaygroundButton from "./PlaygroundButton.js";

const Playground = ({label, amount}) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {setCounter(counter+amount)}
    
    return (
        <div>{`${label}`}
        {counter}
        <Button />
        <button onClick={handleClick}>Click me</button>
        <PlaygroundButton />
        </div>
    )
}

export default Playground;