import React from 'react';
import { debounce, makeStyles } from '@material-ui/core';

import {
  TextField,
  TextFieldProps,
} from 'libs/ui/src/lib/Atoms/TextField/TextField';
import { SEARCH_TIMEOUT_MS } from 'libs/constants/src/lib/constants';

type Props = {
  withDebounce?: boolean;
  onChange?: (value: string) => void;
} & Omit<TextFieldProps, 'onChange'>;

const useStyles = makeStyles(() => ({
  textField: {
    width: '25ch',
  },
}));

const SearchField: React.FC<Props> = ({ withDebounce, onChange, ...props }) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    if (withDebounce) {
      handleDebounceChange?.(value);
    } else {
      onChange?.(value);
    }
  };

  const handleDebounceChange = debounce(onChange, SEARCH_TIMEOUT_MS);

  return (
    <TextField
      {...props}
      className={classes.textField}
      onChange={handleChange}
    />
  );
};

export { SearchField, Props as SearchFieldProps };
