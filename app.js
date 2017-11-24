const graphql = require('graphql').graphql;
const test    = require('./schema/test');
const query = '{test:hello() {name}}'
graphql(test, query).then((result) => {
    console.log(result);
});
