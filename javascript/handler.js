const fetch = require('node-fetch');

module.exports = {
    typicode: async function (event, context) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        return json;
    },
}