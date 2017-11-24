const GraphQLSchema     = require('graphql').GraphQLSchema;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLString     = require('graphql').GraphQLString;
const GraphQLObject     = require('graphql').GraphQLObject;

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: {
                type: GraphQLObject,
                name: 'test',
                fields: {
                    name: {
                        type: GraphQLString,
                        resolve() {
                            return 'haha';
                        }
                    }
                }
            },
            world: {
                type: GraphQLString,
                resolve() {
                    return 123;
                }
            },
        }
    })
});

module.exports = schema;