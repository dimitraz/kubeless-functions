const _ = require('lodash');

module.exports = {
    capitalise: (event, context) => {
        return JSON.stringify(_.capitalize(event.data));
    },
};