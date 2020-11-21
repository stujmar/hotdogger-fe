import React from 'react'

const Test = ({name}) => {

    let currentName = name + "!";
    {{{}}};

    let error;
    let data;
    let apiData = "got data";
    
    const then = (data, error) => {
        setTimeout(() => {
            if (error !== undefined){
                console.log(error);
            } else {
                console.log(data);
            }
        })
    }

    const getData = () => {
        data = apiData;
        return then(data, error);
    }


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
