const express = require('express');

// 该包解析JSON请求
const bodyParse = require('body-parser');

// 该包会处理grap服务的请求和响应 对于你来说，是基于你的schema
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
// 类型
const schema = require('./schema');
const app = express();
// 数据库连接
const connectMongo = require('./mongo-connector');
// 权限认证
const {authenticate} = require('./authenticate');

const start = async () => {
    const mongo = await connectMongo();
    const buildOptions = async (req, res) => {
        const user = await authenticate(req, mongo.Users);
        return {
            context: {mongo, user},
            schema
        }
    }

    app.use('/graphql', bodyParse.json(), graphqlExpress(buildOptions));
    app.use('/graphiql', graphiqlExpress({
        endpointURL: '/graphql',
    }));
    
    const port = 3000;
    app.listen(port, () => {
        console.log(`Hackernews GraphQL server running on port ${port}.`);
    });
};

start();