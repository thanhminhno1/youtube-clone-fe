// @flow
import React from 'react';
import styled from 'styled-components';

import MenuLink from './MenuLink';

const NavList = styled.ul`
  padding: 10px 0;
  border-bottom: solid 1px rgba(0,0,0,0.1);
`;

const NavItem = styled.li`
  list-style: none;
`;

const Menus = (props) => {
  const { navs } = props;
  return(
    <NavList>
    {navs.map(({ to, name, exact, icon }, index) => (
      <NavItem key={index}>
        <MenuLink
            exact={exact}
            to={to}
            name={name}
            icon={icon}
        />
      </NavItem>
    ))}
    </NavList>
  )
}

export default Menus;
