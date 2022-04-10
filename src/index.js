import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  // uri: "http://localhost:4000",
  uri: "https://server-catstronauts-icabina.herokuapp.com/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// =======================================
// APOLLO CONSUMER

// import React from 'react';
// import { ApolloConsumer } from '@apollo/client';

// const WithApolloClient = () => (
//   <ApolloConsumer>
//     {client => 'We have access to the client!' /* do stuff here */} update Cache
//   </ApolloConsumer>
// );
// =======================================
