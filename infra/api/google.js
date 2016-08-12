var axios = require('axios');

module.exports = {

    accessGoogle: function () {
        return axios.get('http://www.google.com');
    }
};

