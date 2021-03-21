import React from 'react';
import {
  GridList as MUIGridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';

import InfoIcon from '@material-ui/icons/Info';
import { Loader } from '../../Atoms/Loader/Loader';
import { ResponseItem } from  '@monorepo-test/shared/types';

 const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1100,
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
  cols = 3,
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
    <div className={classes.root}>
      <MUIGridList cellHeight={300} className={classes.gridList} cols={cols}>
        {data.map(item => (
          <GridListTile
            key={item.imgUrl}
            className={classes.gridItem}
            onClick={() => onItemClick(item)}
          >
            <img src={item.imgUrl} alt={item.imgUrl} />
            <GridListTileBar
              title={item.name}
              subtitle={<span>type: {item.mediaType}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.name}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </MUIGridList>
    </div>
  );
};

export { GridList };
