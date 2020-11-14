import React, {useState} from "react";


const Playground = (props) => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {setCounter(counter+1)}
    return (
        <div>{`${props.label}`}
        {counter}
        <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Playground;