import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Button } from './Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 700,
    margin: 'auto',
  },
  header: {
    marginBottom: theme.spacing(1),
  },
}));

const NoMatch: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.header}>
            Page not found
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Maybe the page you are looking for has been removed, or you typed in
            the wrong URL
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={() => history.push('/')}>
          Go to homepage
        </Button>
      </CardActions>
    </Card>
  );
};

export { NoMatch };
