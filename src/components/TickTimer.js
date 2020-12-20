import React, {useState} from "react";

const {count, setCount} = useState(0);

const TickTimer = () => {
    return (
        <div>{count}</div>
    )
}

export default  TickTimer;