import React from 'react';
import { makeStyles } from '@material-ui/core';

import { useAppConfig, useDrawer } from '@monorepo-test/shared/frontend/utils';
import clsx from 'clsx';
import { DrawerItemProps } from './DrawerItem';
import { DRAWER_WIDTH } from '../constants/ui';
import { Drawer } from './Drawer';
import { AppBar } from './AppBar';

type Props = {
  loading?: boolean;
  drawerItems?: DrawerItemProps[];
};

const useStyles = makeStyles(theme => ({
  pageContent: {
    position: 'absolute',
    minHeight: '80vh',
    marginLeft: DRAWER_WIDTH,
    marginTop: theme.spacing(8),
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    padding: theme.spacing(2),
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  pageContentCollapsed: {
    width: `calc(100% - ${theme.spacing(7) + 1}px)`,
    marginLeft: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.spacing(9) + 1}px)`,
      marginLeft: theme.spacing(9) + 1,
    },
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const Layout: React.FC<Props> = ({ children, drawerItems }) => {
  const classes = useStyles();
  const { variant } = useAppConfig();
  const [open, toggleOpen] = useDrawer();

  return (
    <>
      <Drawer open={open} toggleOpen={toggleOpen} drawerItems={drawerItems} />
      <AppBar variant={variant} open={open} toggleOpen={toggleOpen} />
      <div
        className={clsx(classes.pageContent, {
          [classes.pageContentCollapsed]: !open,
        })}
      >
        {children}
      </div>
    </>
  );
};

export { Layout, Props as PageProps };
