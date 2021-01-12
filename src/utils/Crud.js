const axios = require('axios')

export const getSave = async (id) => {
       
    // axios.get('http://localhost:8080/saves/1')
    // .then(function (response) {
    //     // handle success
    //     return response;
    // }).catch(err => {
    //     // Handle Error Here
    //     console.error(err);
    // });

    try {
        const resp = await axios.get('http://localhost:8080/saves/1');
        console.log(resp.data)
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};