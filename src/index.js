const express = require('express');

// 该包解析JSON请求
const bodyParse = require('body-parser');

// 该包会处理grap服务的请求和响应 对于你来说，是基于你的schema
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const schema = require('./schema');
const app = express();

app.use('/graphql', bodyParse.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

const port = 3000;
app.listen(port, () => {
    console.log(`Hackernews GraphQL server running on port ${port}.`);
});