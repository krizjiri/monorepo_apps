import React from 'react';
import { makeStyles } from '@material-ui/core';
import { SearchField, SearchFieldProps } from './SearchField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(6),
    margin: 'auto',
    maxWidth: '700px',
  },
  searchField: {
    width: '100%',
  },
}));

type Props = SearchFieldProps;

const SearchBar: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchField
        size={'medium'}
        className={classes.searchField}
        fullWidth
        {...props}
      />
    </div>
  );
};

export { SearchBar };
