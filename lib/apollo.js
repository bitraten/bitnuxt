import "isomorphic-fetch";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
  uri: "http://localhost:8000/graphql"
});

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});
