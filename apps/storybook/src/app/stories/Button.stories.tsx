import React from 'react';
import { Story } from '@storybook/react';
import { text, radios } from '@storybook/addon-knobs';

import { Button, ButtonProps } from '@monorepo-test/shared/frontend/ui';

export default {
  component: Button,
  title: 'Design system/Atoms/Button',
};

const Primary: Story<ButtonProps> = args => (
  <Button color={'primary'} variant={'contained'} {...args}>
    Primary
  </Button>
);

const Secondary: Story<ButtonProps> = args => (
  <Button color={'secondary'} variant={'contained'} {...args}>
    Primary
  </Button>
);

const Link: Story<ButtonProps> = args => (
  <Button variant={'text'} {...args}>
    Link to
  </Button>
);

const ButtonPlayground: Story<ButtonProps> = args => {
  const buttonText = text('Button text', 'Submit');
  const color = radios<'primary' | 'secondary'>(
    'Color',
    { primary: 'primary', secondary: 'secondary' },
    'primary',
  );
  const variant = radios<'text' | 'outlined' | 'contained'>(
    'Variant',
    { text: 'text', outlined: 'outlined', contained: 'contained' },
    'contained',
  );

  return (
    <Button color={color} variant={variant} {...args}>
      {buttonText}
    </Button>
  );
};

ButtonPlayground.args = {};

export { ButtonPlayground, Primary, Secondary, Link };
