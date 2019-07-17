// @flow
import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'

import Menus from './Menus';
import {
	faVideo,
	faCommentDots,
	faUserCircle
} from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  background: #f5f5f5;
  width: 240px;
  height: 100vh;
`;

const NavHome = [
  { to: '/', name: 'Home', exact: true, icon: "video" },
  { to: '/trending', name: 'Trending', exact: true, icon: "comment-dots"  },
  { to: '/subscriptions', name: 'Subscriptions', exact: true, icon: "user-circle" }
];

const NavHistory = [
  { to: '/history', name: 'History', exact: true, icon: "video" },
  { to: '/library', name: 'Library', exact: true, icon: "video" }
];

const NavCategories = [
  { to: '/music', name: 'Music', exact: true, icon: "video" },
  { to: '/gaming', name: 'Gaming', exact: true, icon: "video" },
  { to: '/news', name: 'News', exact: true, icon: "video" },
  { to: '/live', name: 'Live', exact: true, icon: "video" },
  { to: '/360-video', name: '360° Video', exact: true, icon: "video" },
];

const Sidebar = () =>(
  <Wrapper>
    <Menus navs={NavHome} />
    <Menus navs={NavHistory} />
    <Menus navs={NavCategories} />
  </Wrapper>
)

library.add(faVideo, faCommentDots, faUserCircle);
export default Sidebar;
