import React from 'react'

const Test = ({name}) => {

    let currentName = name + "!";
    {{{}}};

    for (let i = 0; i<= 10; i++) {
        console.log(`In scope i: ${i}`);
    }

    return (
        <div>{`HELLO ${currentName}`}</div>
    )
}

export default Test;
