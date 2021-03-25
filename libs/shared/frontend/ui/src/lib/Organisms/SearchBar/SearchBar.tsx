import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  SearchField,
  SearchFieldProps,
} from '../../Molecules/SearchField/SearchField';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  searchField: {
    width: '700px',
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
