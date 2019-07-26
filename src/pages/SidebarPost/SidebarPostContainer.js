import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useSagaInjector from '../../redux/utils/useSagaInjector';
import useReducerInjector from '../../redux/utils/useReducerInjector';
import { context }  from './constants';
import sagas from './sagas';
import reducers from './reducers';
import { fetchCategories } from './actions';
import SidebarPost from '../../components/Layouts/Sidebar/SidebarPost'

const Sidebar = () => {
  useSagaInjector(context, sagas);
  useReducerInjector(context, reducers);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchCategories()) , [dispatch]);
  let categories = useSelector(state => state.post ? state.post.categories : []);
  return <SidebarPost categories={categories} />;
};

export default Sidebar;
