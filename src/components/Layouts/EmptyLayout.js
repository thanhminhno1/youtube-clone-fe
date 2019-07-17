// @flow
import * as React from 'react';
import styled from 'styled-components';

const Wrap = styled.div``;

const  EmptyLayout = (props) => {
  const { children } = props;
    return (
      <Wrap>
        {children}
      </Wrap>
    );
  }



export default EmptyLayout;
