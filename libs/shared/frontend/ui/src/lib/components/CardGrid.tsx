import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import { ResponseItem } from '@monorepo-test/shared/types';
import { CardItem } from './CardItem';
import { CardItemSkeleton } from './CardItemSkeleton';
import { generateArrFromItem } from '../../../../utils/src/lib/generate';

const skeletonItems = generateArrFromItem(<CardItemSkeleton />, 12);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1200,
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

const CardGrid: React.FC<Props> = ({
  data = [],
  onItemClick,
  loading,
  emptyPlaceholder,
}) => {
  const classes = useStyles();

  if (data.length === 0) {
    return (
      <Typography variant="h5" gutterBottom className={classes.noData}>
        {emptyPlaceholder || 'No data to display'}
      </Typography>
    );
  }

  return (
    <Grid container spacing={2} className={classes.root} justify="center">
      {loading
        ? skeletonItems
        : data.map(item => (
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

export { CardGrid, Props as GridListProps };
