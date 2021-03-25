import React from 'react';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';

type Props = ButtonProps;

const Button: React.FC<Props> = props => {
  return <MuiButton {...props}>{props.children}</MuiButton>;
};

export { Button, Props as ButtonProps };
