import Card from '@material-ui/core/Card';
import React from 'react';
import {
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

type Props = {
  title: string;
  description: string;
  imgUrl: string;
  onClick?: () => void;
};

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
    width: 300,
  },
  title: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  description: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
});

const CardItem: React.FC<Props> = ({ title, description, imgUrl }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant={'outlined'}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imgUrl} title={title} />
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { CardItem, Props as CardItemProps };
