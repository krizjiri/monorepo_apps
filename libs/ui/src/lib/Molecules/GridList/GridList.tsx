import React from 'react';
import {
  GridList as MUIGridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  ListSubheader,
  makeStyles,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

import { ResponseItem } from 'libs/types/src';

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
}));

type Props = {
  data: ResponseItem[];
  onItemClick?: (item: ResponseItem) => void;
};

const GridList: React.FC<Props> = ({ data = [], onItemClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MUIGridList cellHeight={300} className={classes.gridList} cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">Search results</ListSubheader>
        </GridListTile>
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
