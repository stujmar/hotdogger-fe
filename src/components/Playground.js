import React, {useState} from "react";


const Playground = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {setCounter(counter+1)}
    return (
        <div>This is the Playground
        {counter}
        <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Playground;