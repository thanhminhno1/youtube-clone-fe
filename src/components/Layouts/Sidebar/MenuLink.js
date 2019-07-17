// @flow
import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuLink = styled(NavLink)`
  display: flex;
  padding: 10px 20px;
  font-size: 16px;
  color: #0d0d0d;

  svg {
    font-size: 20px;
    margin-right: 20px;
  }

  &:hover {
    background: #c5c5c5;
  }

  &.active{
    background: #c5c5c5;
    color: #151515;

    svg {
      color: #ff052d;
    }
  }
`;

const SidebarLink = (props) => {
  const { to, icon, name, exact } = props;
    return (
      <>
        <MenuLink
          to={to}
          exact={exact}
        >
         <FontAwesomeIcon icon={icon} />
          {name}
        </MenuLink>
      </>
    );
  }

export default SidebarLink;
