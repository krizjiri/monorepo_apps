import React from 'react';
import { Meta, Story } from '@storybook/react';

import { TextField, TextFieldProps } from '@monorepo-test/shared/frontend/ui';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  component: TextField,
  title: 'Design system/Atoms/Text Field',
  decorators: [withKnobs],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Field label',
    error: false,
    disabled: false,
    variant: 'outlined',
    required: false,
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['filled', 'outlined', 'standard'],
      },
    },
    onChange: { action: 'changed' },
  },
} as Meta;

const TextFieldPlayground: Story<TextFieldProps> = args => {
  return <TextField {...args} />;
};

TextFieldPlayground.args = {};

export { TextFieldPlayground };
