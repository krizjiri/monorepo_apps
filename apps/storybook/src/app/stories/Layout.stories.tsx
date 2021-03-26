import React from 'react';
import { Story } from '@storybook/react';
import MovieIcon from '@material-ui/icons/Movie';
import PeopleIcon from '@material-ui/icons/People';

import {
  DrawerItemProps,
  Layout,
  PageProps,
} from '@monorepo-test/shared/frontend/ui';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  component: Layout,
  title: 'Design system/Organisms/Layout',
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
  const drawerItems: DrawerItemProps[] = [
    { label: 'Search movies', icon: <MovieIcon /> },
    { label: 'Search actors', icon: <PeopleIcon /> },
  ];

  return <Layout {...args} drawerItems={drawerItems} />;
};

export { primary };
