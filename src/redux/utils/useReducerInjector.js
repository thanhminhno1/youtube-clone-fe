import { useEffect } from 'react';

import { store } from '../store';

export default (key, reducer) => {
  useEffect(() => {
    store.injectReducer(key, reducer);
  }, [key, reducer]);
};
