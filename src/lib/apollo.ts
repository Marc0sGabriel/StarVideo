import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cljor776s0vp501t9f3br8aiz/master',
  cache: new InMemoryCache(),
});
