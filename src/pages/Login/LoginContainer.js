import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useSagaInjector from '../../redux/utils/useSagaInjector';
import useReducerInjector from '../../redux/utils/useReducerInjector';
import { context }  from './constants';
import sagas from './sagas';
import reducers from './reducers';
import Login from '../../components/Login'
import { loginAction } from './actions';

const Home = () => {
  useSagaInjector(context, sagas);
  useReducerInjector(context, reducers);
  const dispatch = useDispatch();
  const loginHandle = useCallback(
    () => dispatch(loginAction()),
    [dispatch]
  )
  return (
    <Login login={loginHandle} />
  );
};

export default Home;
