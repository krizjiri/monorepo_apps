import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { Button, ButtonProps } from '@monorepo-test/shared/frontend/ui';
import { action, withActions } from '@storybook/addon-actions';
import { Box } from '@material-ui/core';

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
  return (
    <Button
      // color={color}
      // variant={variant}
      onClick={action('button-click')}
      {...args}
    >
      {args.children}
    </Button>
  );
};

ButtonPlayground.args = {
  color: 'primary',
  variant: 'contained',
  children: 'Hello',
  disabled: false,
};

export { ButtonPlayground, Primary, Secondary, Link };

export default {
  component: Button,
  title: 'Design system/Atoms/Button',
  decorators: [
    (Story: Story) => (
      <Box margin={1}>
        <Story />
      </Box>
    ),
    withKnobs,
    withActions,
  ],
  parameters: {
    layout: 'centered',
  },
  args: {
    color: 'primary',
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
  },
} as Meta;
