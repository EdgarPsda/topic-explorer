import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "bootstrap/dist/css/bootstrap.min.css";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: async (operation) => {
    operation.setContext({
      headers: {
        authorization: `token ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
      },
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App client={client} />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
