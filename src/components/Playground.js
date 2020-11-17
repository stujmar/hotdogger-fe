import React, {useState} from "react";
import Button from "./Button.js"
import PlaygroundButton from "./PlaygroundButton.js";

const Playground = ({label, amount}) => {
    const [counter, setCounter] = useState(0);
    const [time, setTime] = useState("");
    const [num, setNum] = useState(0);

    const handleClick = () => {setCounter(counter+amount)};
    const increment = (value) => setCounter(counter+value);
    
    

    // Just making sure render isn't some sort of keyword.
    const slender = () => {
       setNum(num + 1);
    }
    
    setInterval(slender(), 1000);

    return (
        <div>{`${label}`}
            {counter}
            <Button />
            <button onClick={handleClick}>Click me</button>
            {num}
            <input></input>

            <PlaygroundButton onClick={increment} increment={1}/>
            <PlaygroundButton onClick={increment} increment={5}/>
            <PlaygroundButton onClick={increment} increment={10}/>
            <PlaygroundButton onClick={increment} increment={50}/>
            <PlaygroundButton onClick={increment} increment={100}/>
            <PlaygroundButton onClick={increment} increment={-100}/>
        </div>
    )
}

export default Playground;