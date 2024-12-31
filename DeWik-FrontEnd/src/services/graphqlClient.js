// src/services/graphqlClient.js
import { GraphQLClient } from 'graphql-request';

const endpoint = "https://api.studio.thegraph.com/query/90743/dewik-v3/version/latest";

export const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        // Add any necessary headers here
    },
});
