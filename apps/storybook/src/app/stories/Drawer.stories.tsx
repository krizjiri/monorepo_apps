import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Drawer, DrawerProps } from '@monorepo-test/shared/frontend/ui';

export default {
  component: Drawer,
  title: 'Design system/Molecules/Drawer',
  args: {
    initialOpen: true,
  },
  argTypes: {},
} as Meta;

const DrawerPlayground: Story<DrawerProps> = args => {
  return <Drawer {...args} />;
};

DrawerPlayground.args = {};

export { DrawerPlayground };
