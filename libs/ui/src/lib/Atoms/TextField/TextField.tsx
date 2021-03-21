import React from 'react';
import { TextFieldProps, TextField as MuiTextField } from '@material-ui/core';

type Props = Omit<TextFieldProps, 'variant'>;

const TextField: React.FC<Props> = props => {
  return <MuiTextField variant="outlined" {...props} />;
};

export { TextField, Props as TextFieldProps };
