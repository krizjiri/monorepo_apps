import React, { useCallback, useState } from 'react';
import {
  CircularProgress,
  makeStyles,
  TextFieldProps,
} from '@material-ui/core';

import { TextField } from '../../Atoms/TextField/TextField';
import { Button } from '../../Atoms/Button/Button';

type Props = {
  onSubmit: (value: string) => void;
  loading?: boolean;
  searchLabel?: string;
} & Omit<TextFieldProps, 'onSubmit' | 'onChange' | 'value'>;

const useStyles = makeStyles(theme => ({
  searchWrapper: {
    display: 'flex',
  },
  buttonWrapper: {
    position: 'relative',
  },
  buttonSearch: {
    marginLeft: theme.spacing(1),
    height: '100%',
  },
  buttonProgress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const SearchField: React.FC<Props> = ({
  onSubmit,
  searchLabel = 'Search',
  loading,
  ...props
}) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [value],
  );

  const handleSubmit = useCallback(() => {
    onSubmit(value);
  }, [value]);

  return (
    <div className={classes.searchWrapper}>
      <TextField
        {...props}
        value={value}
        onChange={handleChange}
        variant="outlined"
        disabled={loading}
      />
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.buttonSearch}
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={() => handleSubmit()}
        >
          {searchLabel}
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
};

export { SearchField, Props as SearchFieldProps };
