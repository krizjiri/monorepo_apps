import React from 'react';
import { Story } from '@storybook/react';

import { TextField, TextFieldProps } from '@monorepo-test/shared/frontend/ui';
import { boolean, radios, text } from '@storybook/addon-knobs';

export default {
  component: TextField,
  title: 'Design system/Atoms/Text Field',
};

const TextFieldPlayground: Story<TextFieldProps> = args => {
  const disabled = boolean('Disabled', false);
  const required = boolean('Required', false);
  const label = text('Label', 'Field label');
  const error = boolean('Error', false);
  const variant = radios<'filled' | 'outlined' | 'standard'>(
    'Variant',
    {
      filled: 'filled',
      outlined: 'outlined',
      standard: 'standard',
    },
    'outlined',
  );

  return (
    <TextField
      disabled={disabled}
      required={required}
      label={label}
      variant={variant}
      error={error}
      {...args}
    />
  );
};

TextFieldPlayground.args = {};

export { TextFieldPlayground };
