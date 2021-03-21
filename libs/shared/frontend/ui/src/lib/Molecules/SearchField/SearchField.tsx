import React from 'react';
import { debounce } from '@material-ui/core';

import {
  TextField,
  TextFieldProps,
} from 'libs/ui/src/lib/Atoms/TextField/TextField';
import { SEARCH_TIMEOUT_MS } from 'libs/constants/src/lib/constants';

type Props = {
  withDebounce?: boolean;
  onChange?: (value: string) => void;
} & Omit<TextFieldProps, 'onChange'>;

const SearchField: React.FC<Props> = ({ withDebounce, onChange, ...props }) => {
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
      variant={props.variant}
      onChange={handleChange}
      fullWidth
    />
  );
};

export { SearchField, Props as SearchFieldProps };
