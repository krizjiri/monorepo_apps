import React from 'react';
import { Card, CardHeader, makeStyles } from '@material-ui/core';

import { AppBar } from '../AppBar/AppBar';
import { Loader } from '../../Atoms/Loader/Loader';

type Props = {
  title: string;
  loading?: boolean;
};

const useStyles = makeStyles({
  pageCard: {
    minHeight: '80vh',
    marginTop: '1rem',
  },
});

const Page: React.FC<Props> = ({ title, children, loading }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar title={title} />
      {loading ? (
        <Loader />
      ) : (
        <Card className={classes.pageCard}>
          <CardHeader title={title} />
          {children}
        </Card>
      )}
    </>
  );
};

export { Page, Props as PageProps };
