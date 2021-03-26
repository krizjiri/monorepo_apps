import React from 'react';
import { Meta, Story } from '@storybook/react';

import { AppBar, AppBarProps } from '@monorepo-test/shared/frontend/ui';

export default {
  component: AppBar,
  title: 'Design system/Molecules/App Bar',
  argTypes: {
    variant: {
      description: 'Shows icon based on selected variant ',
      control: {
        options: ['movie', 'music'],
        type: 'select',
      },
      defaultValue: 'movie',
    },
  },
} as Meta;

const AppBarPlayground: Story<AppBarProps> = args => {
  return <AppBar {...args} />;
};

AppBarPlayground.args = {};

export { AppBarPlayground };
