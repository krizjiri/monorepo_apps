import React from 'react';
import { LinearProgress, makeStyles } from '@material-ui/core';

type Props = {
  loading: boolean;
};

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    top: theme.spacing(8),
  },
}));

const Page: React.FC<Props> = ({ loading, children }) => {
  const classes = useStyles();

  return (
    <div>
      {loading && <LinearProgress className={classes.root} />}
      {children}
    </div>
  );
};

export { Page };
