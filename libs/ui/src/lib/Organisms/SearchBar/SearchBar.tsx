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
    marginTop: '1rem',
  },
}));

const SearchBar: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchField size={'medium'} {...props} />
    </div>
  );
};

export { SearchBar };
