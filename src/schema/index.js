const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers2');

// 定义类型
const typeDefs = `
    type Link {
        id: ID!
        url: String!
        description: String!
        postedBy: User
    }

    type Query {
        allLinks: [Link!]!
    }

    type Mutation {
        createLink(url: String!, description: String!): Link
        createUser(name: String!, authProvider: AuthProviderSignupData!): User
        signinUser(email: AUTH_PROVIDER_EMAIL): SigninPayLoad
    }

    type SigninPayLoad {
        token: String
        user: User 
    }

    type User {
        id: ID!
        name: String
        email: String
    }

    input AuthProviderSignupData {
        email: AUTH_PROVIDER_EMAIL
    }

    input AUTH_PROVIDER_EMAIL {
        email: String!
        password: String!
    }
`;

// 从类型定义生成模式对象
module.exports = makeExecutableSchema({typeDefs, resolvers});