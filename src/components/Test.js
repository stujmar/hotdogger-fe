import React from 'react'

const Test = ({name}) => {

    let currentName = name + "!";
    {{{}}};

    const looper = () => {
        for (let i = 0; i<= 10; i++) {
            console.log(`In scope i: ${i}`, this);
        }
    }
    looper();
    console.log('out of scope', this);

    return (
        <div>{`HELLO ${currentName}`}</div>
    )
}

export default Test;
