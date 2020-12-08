# aternos-api
 An external aternos api which allows you to access your server (start/stop/restart) from nodejs.

# Usage
```js
const aternos = require('aternos-api');

// Create a new aternos session
const client = new aternos({
    cookie: "REQUEST_COOKIE",
    SEC: "SERVER_MANAGE_TOKEN"
}, 'ATERNOS_SESSION_TOKEN') 

client.start() // starts the server
client.getStatus() // checks the status of the server "Online/Offline/Starting/Stopping"
client.stop() // stops the server
client.reset().then(confirmation => {
    client.confirm(confirmation)
}) // Resets the world

client.on('event', function() {
    // do something with something
    /*
    Example:
    client.on('serverStart', function() {
        console.log('The server has started!')
    })
    */
})
```
