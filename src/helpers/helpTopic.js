import React, { useState } from "react";
import gql from "graphql-tag";

export const helpTopic = (name) => {
  const topic = gql`
    {
      topic(name: "${name}") {
        name
        stargazerCount
        relatedTopics(first: 10) {
          id
          name
          stargazerCount
        }
      }
    }
  `;

  return { topic };
};
