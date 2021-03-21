import React from 'react';
import {
  AppBar as MUIAppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const AppBar = ({ title }) => {
  const classes = useStyles();
  return React.createElement(
    MUIAppBar,
    { position: 'static' },
    React.createElement(
      Toolbar,
      null,
      React.createElement(
        IconButton,
        {
          edge: 'start',
          className: classes.menuButton,
          color: 'inherit',
          'aria-label': 'menu',
        },
        React.createElement(MenuIcon, null),
      ),
      React.createElement(
        Typography,
        { variant: 'h6', className: classes.title },
        title,
      ),
      React.createElement(Button, { color: 'inherit' }, 'Login'),
    ),
  );
};
export { AppBar };
//# sourceMappingURL=AppBar.js.map
