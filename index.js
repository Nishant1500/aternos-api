'use strict';

const http = require('axios');
const event = require('events');

module.exports = class AternosAPI {
    /**
     * @param {?object} headers 
     * @param {?string} token 
     */
    constructor(headers, token) {
        this.headers = headers
        this.token = token
        this.event = new event.EventEmitter()
    }
    /**
     * @param {?string} path The URL request path 
     * @param {?object} data A table of the elements "headers" (array) and "params" (array)
     * @returns {?string} The response of the request made
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

    /**
     * @param {?string} event
     * @param {?function (returned values) { }} callback
     */

    on(event, callback) {
        
    }
}