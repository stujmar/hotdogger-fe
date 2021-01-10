const axios = require('axios')

export const getSave = (id) => {
       
    axios.get('http://localhost:8080/saves/1')
    .then(function (response) {
        // handle success
        return response;
    })
};