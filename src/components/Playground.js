import React, {useState} from "react";
import Button from "./Button.js"
import PlaygroundButton from "./PlaygroundButton.js";

const Playground = ({label, amount}) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {setCounter(counter+amount)}
    const increment = (value) => setCounter(counter+value);
    let clock;
    
    const render = () => {
        clock =(new Date).toLocaleTimeString();
    }
    
    setInterval(render(), 1000);

    return (
        <div>{`${label}`}
            {counter}
            <Button />
            <button onClick={handleClick}>Click me</button>
            <input></input>
            {clock}
            {(new Date).toLocaleTimeString()}
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