import React from "react"

const PlaygroundButton = (props) => {

    const handleClick = () => props.onClickFunctioin(props.increment)

    return (
        <button onClick={handleClick}></button>
    )
}

export default PlaygroundButton