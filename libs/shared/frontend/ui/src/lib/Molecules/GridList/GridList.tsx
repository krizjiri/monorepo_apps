import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import { Loader } from '../../Atoms/Loader/Loader';
import { CardItem } from '../../Molecules/CardItem/CardItem';
import { ResponseItem } from '@monorepo-test/shared/types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1300,
    margin: 'auto',
  },
  gridItem: {
    ':hover': {
      pointer: 'cursor',
    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  noData: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '20rem',
  },
  control: {
    padding: theme.spacing(1),
  },
}));

type Props = {
  data: ResponseItem[];
  loading?: boolean;
  onItemClick?: (item: ResponseItem) => void;
  cols?: number;
  emptyPlaceholder?: string;
};

const GridList: React.FC<Props> = ({
  data = [],
  onItemClick,
  loading,
  emptyPlaceholder,
}) => {
  const classes = useStyles();

  if (loading) {
    return <Loader />;
  }

  if (data.length === 0) {
    return (
      <Typography variant="h5" gutterBottom className={classes.noData}>
        {emptyPlaceholder || 'No data to display'}
      </Typography>
    );
  }

  return (
    <Grid container spacing={2} className={classes.root} justify="center">
      {data.map(item => (
        <Grid item>
          <CardItem
            title={item.name}
            description={item.name}
            onClick={() => onItemClick(item)}
            imgUrl={item.imgUrl}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export { GridList, Props as GridListProps };
