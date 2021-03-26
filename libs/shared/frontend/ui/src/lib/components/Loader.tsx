import React from 'react';
import { makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  loaderWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20rem',
  },
}));

const Loader: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.loaderWrapper}>
      <CircularProgress />
    </div>
  );
};

export { Loader };
