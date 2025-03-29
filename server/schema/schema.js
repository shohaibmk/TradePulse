import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import { MongoClient } from 'mongodb';

export const mongoDBConnection = async () => {
    const client = new MongoClient(process.env.MONGO_URI, {
        useNewUrlParser: true,
    });
    let cachedConnection;

    if (!cachedConnection) {
        try {
            cachedConnection = await client.connect();
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        }
    } else {
        return cachedConnection;
    }

    return cachedConnection;
}

/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 */
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            hello: {
                type: GraphQLString,
                resolve: () => 'world',
            },

        },
    }),
});

export default schema;