# aternos-api
 An external aternos api which allows you to access your server (start/stop/restart) from nodejs.

# Usage
```js
const aternos = require('aternos-api');

// Create a new aternos session
const client = new aternos({
    cookie: "example_cookie",
    SEC: "m2d9kxtx3i000000:mk3sohgxm8b00000"
}, 'VuwO0awIhoAZHa3xnlqc7jWxQHMF0nyWyfLGXCyx4DexGXQDlaLjzrEbwklb4OBawLwtYtCjlgEUfxVLgkv3KV7rYltwtS5hmpUr') // not real info, just example

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
