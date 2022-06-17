import { ThemeProvider } from "styled-components";
import React from "react";

import { theme } from "../style/theme";
import GlobalStyle from "../style/Global";

import logo from '../assets/logo.png'

import { MainRouter } from '../views/'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphqlErrors, networkError}) => {
		if (graphqlErrors) {
				graphqlErrors.map(({messsage, location, path}) => {
						alert(`Graphql error ${messsage}`)
				})
		}
})

const link = from([
		errorLink,
		new HttpLink({uri: "http://localhost:4000/graphql"})
])

const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: link,
})


function App() {
  return (
    <ThemeProvider theme={theme}>
		    <GlobalStyle/>
		    <ApolloProvider client={client}>
		      <MainRouter/>
		    </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
