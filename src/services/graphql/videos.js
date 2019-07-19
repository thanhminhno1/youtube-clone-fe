import { fetchQuery } from 'relay-runtime';
import graphql from 'babel-plugin-relay/macro';

import environment from './environment';

const query = graphql`
query videosQuery {
  videos {
    id
    title
    author
    viewer
    url
    thumbnailUrl
  }
}
`;

const variables = {};

export const listVideos = () => fetchQuery(environment, query, variables);
