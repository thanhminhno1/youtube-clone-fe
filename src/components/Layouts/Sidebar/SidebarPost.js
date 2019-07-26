// @flow
import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'

import Menus from './Menus';

const Wrapper = styled.div`
  background: #f5f5f5;
  width: 240px;
  height: 100vh;
`;

const Sidebar = (props) =>{
  const listCategories = props.categories.map(category => {
    return (
    {
      to: `/category/${category.id}`,
      name: category.name,
      exact: true
    }
  )});
  return (
    <Wrapper>
      <Menus navs={listCategories} />
    </Wrapper>
  );
}

export default Sidebar;
