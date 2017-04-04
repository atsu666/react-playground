/**
 * Created by atsu666 on 2017/04/03.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

function graphQLFetcher(graphQLParams) {
    console.log(graphQLParams);
    return fetch('https://api.github.com/graphql', {
        method: 'post',
        headers: {
            // 'Content-Type': 'application/json',
            Authorization: 'token 79bdc44d18970a8e33826f650c47aeb0d0a7dd3c'
        },
        body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
}

ReactDOM.render(<GraphiQL fetcher={graphQLFetcher}/>, document.getElementById('app'));