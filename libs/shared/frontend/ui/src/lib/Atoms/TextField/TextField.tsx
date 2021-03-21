import React from 'react';
import { TextFieldProps, TextField as MuiTextField } from '@material-ui/core';

type Props = TextFieldProps;

const TextField: React.FC<Props> = props => {
  return <MuiTextField {...props} />;
};

export { TextField, Props as TextFieldProps };
