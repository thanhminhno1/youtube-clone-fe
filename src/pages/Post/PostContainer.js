import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useSagaInjector from '../../redux/utils/useSagaInjector';
import useReducerInjector from '../../redux/utils/useReducerInjector';
import { context }  from './constants';
import sagas from './sagas';
import reducers from './reducers';
import { fetchPosts } from './actions';

const Post = () => {
  useSagaInjector(context, sagas);
  useReducerInjector(context, reducers);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchPosts()) , [dispatch]);
  let posts = useSelector(state => state.post ? state.post.posts : []);
  debugger
  return (
    <div>
      <h3>Recommended123</h3>
      {
        posts && posts.map(post => <p>{post.content}</p>)
      }
    </div>
  );
};

export default Post;
