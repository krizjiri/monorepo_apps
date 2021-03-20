import React from 'react';
import { NavBar, NavBarProps } from './nav-bar';

export default {
  component: NavBar,
  title: 'NavBar',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: NavBarProps = {};

  return <NavBar />;
};
