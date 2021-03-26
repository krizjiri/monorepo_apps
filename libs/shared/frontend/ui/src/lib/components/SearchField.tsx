import React, { useCallback, useState } from 'react';
import {
  CircularProgress,
  makeStyles,
  TextFieldProps,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from './TextField';
import { Button } from './Button';

type Props = {
  onSubmit: (value: string) => void;
  loading?: boolean;
  searchLabel?: string;
  initialValue?: string;
} & Omit<TextFieldProps, 'onSubmit' | 'onChange' | 'value'>;

const useStyles = makeStyles(theme => ({
  searchWrapper: {
    display: 'flex',
    width: '100%',
  },
  buttonWrapper: {
    position: 'relative',
  },
  buttonSearch: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
  initialValue = '',
  ...props
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [value],
  );

  const handleSubmit = useCallback(
    (event?: React.FormEvent<HTMLFormElement>) => {
      event?.preventDefault();
      onSubmit(value);
    },
    [value],
  );

  const handleReset = useCallback(() => {
    setValue(initialValue);
    handleSubmit();
  }, [initialValue]);

  return (
    <form className={classes.searchWrapper} onSubmit={handleSubmit}>
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
          color="primary"
          variant="contained"
          disabled={loading || value.length === 0}
          type="submit"
        >
          <SearchIcon />
          {searchLabel}
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
      <Button
        variant="outlined"
        onClick={handleReset}
        disabled={loading || value.length === 0}
      >
        Reset
      </Button>
    </form>
  );
};

export { SearchField, Props as SearchFieldProps };
