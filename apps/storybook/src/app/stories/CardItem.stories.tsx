import React from 'react';
import { Meta, Story } from '@storybook/react';

import { CardItem, CardItemProps } from '@monorepo-test/shared/frontend/ui';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  component: CardItem,
  title: 'Design system/Molecules/Card Item',
  decorators: [withKnobs],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Baby Yoda',
    description: 'There is Baby Yoda!',
    imgUrl: 'https://i.imgur.com/e5ufyNO.jpeg',
  },
  argTypes: {
    title: {
      type: { name: 'string', required: true },
      description: 'Title of Card component',
    },
    imgUrl: {
      type: { name: 'string', required: true },
      description: 'URL of Card image',
    },
  },
} as Meta;

const CardItemStory: Story<CardItemProps> = args => {
  return <CardItem {...args} />;
};

CardItemStory.args = {};

export { CardItemStory };
