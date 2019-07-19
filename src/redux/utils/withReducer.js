import React from 'react';

import { store } from '.';

const withReducer = (key, reducer) => WrapperdComponent => props => {
  store.injectReducer(key, reducer);
  return <WrapperdComponent {...props} />;
};

export { withReducer };
