import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const CardItemSkeleton: React.FC = () => {
  return (
    <Grid item>
      <Skeleton variant="rect" width={300} height={250} />
    </Grid>
  );
};

export { CardItemSkeleton };
