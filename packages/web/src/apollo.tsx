import { FC } from "react";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

export const Provider: FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
