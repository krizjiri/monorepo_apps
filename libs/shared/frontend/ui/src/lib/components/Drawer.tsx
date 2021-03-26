import React from 'react';
import {
  createStyles,
  CssBaseline,
  Divider,
  Drawer as MuiDrawer,
  DrawerProps,
  IconButton,
  List,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import SettingsIcon from '@material-ui/icons/Settings';
import { DrawerItem, DrawerItemProps } from './DrawerItem';
import { DRAWER_WIDTH } from '../constants/ui';

type Props = {
  open: boolean;
  toggleOpen: () => void;
  drawerItems?: DrawerItemProps[];
} & DrawerProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: DRAWER_WIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

const settingsMenuItem: DrawerItemProps = {
  icon: <SettingsIcon />,
  label: 'Settings',
  link: '/settings',
};

const Drawer: React.FC<Props> = ({ open, toggleOpen, drawerItems = [] }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MuiDrawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => toggleOpen()}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {drawerItems.map(props => (
            <DrawerItem {...props} />
          ))}
        </List>
        <Divider />
        <List>
          <DrawerItem {...settingsMenuItem} />
        </List>
      </MuiDrawer>
    </div>
  );
};

export { Drawer, Props as DrawerProps };
