import React, {useState} from "react";
import Button from "./Button.js"
import PlaygroundButton from "./PlaygroundButton.js";

const Playground = ({label, amount}) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {setCounter(counter+amount)}
    const increment = (value) => setCounter(counter+value);
    return (
        <div>{`${label}`}
        {counter}
        <Button />
        <button onClick={handleClick}>Click me</button>
        <PlaygroundButton onClick={increment} increment={1}/>
        </div>
    )
}

export default Playground;