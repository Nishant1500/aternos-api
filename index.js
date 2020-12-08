const http = require('axios');

module.exports = class AternosAPI {
    /**
     * @param {?object} headers 
     * @param {?string} token 
     */
    constructor(headers, token) {
        this.headers = headers
        this.token = token
    }
    /**
     * @param {?string} path The URL request path 
     * @param {?object} data A table of the elements "headers" (array) and "params" (array)
     */

    makeRequest(path, data) {
        let url = `https://aternos.org${path}`
        http.default.get(url, {
            params: data.params,
            headers: data.headers
        }).then(response => {
            return response
        })
    }
}