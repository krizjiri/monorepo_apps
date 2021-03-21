import React from 'react';
import {
  SearchField,
  SearchFieldProps,
} from 'libs/ui/src/lib/Molecules/SearchField/SearchField';
import { makeStyles } from '@material-ui/core';

type Props = SearchFieldProps;

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

const SearchBar: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchField size={'medium'} className={classes.searchField} {...props} />
    </div>
  );
};

export { SearchBar };
