import React, {useState} from "react";


const Playground = ({label}) => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {setCounter(counter+1)}
    return (
        <div>{`${label}`}
        {counter}
        <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Playground;