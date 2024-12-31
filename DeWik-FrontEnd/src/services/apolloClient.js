import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://api.studio.thegraph.com/query/90743/dewik-v3/version/latest",
  cache: new InMemoryCache()
});

export default client;
