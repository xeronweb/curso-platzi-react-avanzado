import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { App } from './App'
import { Context } from './Context'

const client = new ApolloClient({
    uri: 'https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql'
})


ReactDOM.render(
    <Context>
        <ApolloProvider client={client}>
            < App />
        </ApolloProvider>
    </Context>,
    document.getElementById('app')
);