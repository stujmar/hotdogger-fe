import React from "react"

const PlaygroundButton = (props) => {

    const handleClick = () => props.onClick(props.increment);
    let prefix = props.increment > 0 ? "+" : "";
    let display = `${prefix}${props.increment}`;
    return (
        <button onClick={handleClick}>
            {display}
        </button>
    )
}

export default PlaygroundButton