// @flow
import * as React from 'react';
import styled from 'styled-components';

import Sidebar from '../../pages/SidebarPost/SidebarPostContainer';

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

const  PostLayout = (props) => {
  const { children } = props;
    return (
      <Wrap>
        <Body>
          <Sidebar />
          <Content>
            {children}
          </Content>
        </Body>
      </Wrap>
    );
  }

export default PostLayout;
