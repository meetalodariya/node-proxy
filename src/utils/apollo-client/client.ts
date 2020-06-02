import { ApolloClient, gql, InMemoryCache } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import config from "config";
import consts from "../constants";

const link = createHttpLink({
  uri: config.get(consts.GRAPHQL.URI),
  fetch: fetch,
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export { client, gql };
