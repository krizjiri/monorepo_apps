import React from 'react';
import {
  AppBar as MUIAppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle } from '@material-ui/icons';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import MusicNoteSharpIcon from '@material-ui/icons/MusicNoteSharp';
import clsx from 'clsx';
import { DRAWER_WIDTH } from '../constants/ui';

type Props = {
  variant?: 'movie' | 'music';
  open?: boolean;
  toggleOpen?: () => void;
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginRight: 36,
  },
}));

const AppBar: React.FC<Props> = ({
  variant = 'movie',
  open = false,
  toggleOpen,
}) => {
  const classes = useStyles();

  const renderIcon = () => {
    switch (variant) {
      case 'music':
        return <MusicNoteSharpIcon className={classes.icon} />;
      default:
        return <LocalMoviesIcon className={classes.icon} />;
    }
  };

  const renderTitle = () => {
    switch (variant) {
      case 'music':
        return 'MUSIC APP';
      default:
        return 'MOVIES APP';
    }
  };

  return (
    <MUIAppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        {renderIcon()}
        <Typography variant="h6" className={classes.title}>
          {renderTitle()}
        </Typography>
        <AccountCircle />
      </Toolbar>
    </MUIAppBar>
  );
};

export { AppBar, Props as AppBarProps };
