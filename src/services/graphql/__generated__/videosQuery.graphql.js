/**
 * @flow
 * @relayHash f15a35f1556ec617850ebb9665ce1bb3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type videosQueryVariables = {||};
export type videosQueryResponse = {|
  +videos: ?$ReadOnlyArray<?{|
    +id: string,
    +title: ?string,
    +author: ?string,
    +viewer: ?number,
    +url: ?string,
    +thumbnailUrl: ?string,
  |}>
|};
export type videosQuery = {|
  variables: videosQueryVariables,
  response: videosQueryResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "videos",
    "storageKey": null,
    "args": null,
    "concreteType": "Video",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "author",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "viewer",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "url",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "thumbnailUrl",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "videosQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "videosQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "videosQuery",
    "id": null,
    "text": "query videosQuery {\n  videos {\n    id\n    title\n    author\n    viewer\n    url\n    thumbnailUrl\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5267d87427d6fa404ac9835c044223c1';
module.exports = node;
