import React from 'react';
import {
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { ResponseItem } from 'libs/types/src';

const useStyles = makeStyles(() => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

type Props = {
  item: ResponseItem;
  onItemClick?: (item: ResponseItem) => void;
};

const GridItem: React.FC<Props> = ({ item, onItemClick }) => {
  const classes = useStyles();

  return (
    <GridListTile key={item.imgUrl} onClick={() => onItemClick(item)}>
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
  );
};

export { GridItem };
