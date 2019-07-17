// @flow
import * as React from 'react';
import styled from 'styled-components';

import {  Header } from '.';
import Sidebar from './Sidebar';

const Wrap = styled.div`
  background: #fafafa;
`;

const Body = styled.div`
  display: flex;
  margin-top: 56px;
`;
const Content = styled.div`
  flex: 1;
  margin-left: 30px;
`;

const  MainLayout = (props) => {
  const { children } = props;
    return (
      <Wrap>
        <Header />
        <Body>
          <Sidebar />
          <Content>
            {children}
          </Content>
        </Body>
      </Wrap>
    );
  }

export default MainLayout;
