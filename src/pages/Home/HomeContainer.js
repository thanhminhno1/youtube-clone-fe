import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useSagaInjector from '../../redux/utils/useSagaInjector';
import useReducerInjector from '../../redux/utils/useReducerInjector';
import { context }  from './constants';
import sagas from './sagas';
import reducers from './reducers';
import { fetchVideos } from './actions';

const Home = () => {
  useSagaInjector(context, sagas);
  useReducerInjector(context, reducers);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchVideos()) , [dispatch]);
  const videos = useSelector(state => state.home ? state.home.videos : []);
  return (
    <div>
      <h3>Recommended</h3>
      {
        videos && videos.map(video => <p>{video.url}</p>)
      }
    </div>
  );
};

export default Home;
