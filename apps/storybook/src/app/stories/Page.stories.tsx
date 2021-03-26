import React from 'react';
import { Story } from '@storybook/react';

import { Page, PageProps } from '@monorepo-test/shared/frontend/ui';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  component: Page,
  title: 'Design system/Organisms/Page',
  decorators: [withKnobs],
  args: {
    title: 'Page title',
  },
  argTypes: {
    title: {
      type: { name: 'string', required: true },
      description: 'Title of Page',
    },
  },
};

const primary: Story<PageProps> = args => {
  return <Page {...args} />;
};

export { primary };
