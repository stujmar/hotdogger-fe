const axios = require('axios')

export const getSave = async (id) => {
       
    axios.get('http://localhost:8080/saves/1')
    .then(function (response) {
        // handle success
        const myData = response.data;
        console.log(myData);
        return myData;
    }).catch(err => {
        // Handle Error Here
        console.error(err);
    });

};