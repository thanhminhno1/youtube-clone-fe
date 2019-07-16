import React from 'react';

import { store } from '.';

const withReducer = (key, reducer) => WrapperdComponent => {
  const Extended = props => {
    store.injectReducer(key, reducer);

    return <WrapperdComponent {...props} />;
  };

  return Extended;
};

export { withReducer };
