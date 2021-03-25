import React from 'react';
import { Story } from '@storybook/react';

import { CardItem, CardItemProps } from '@monorepo-test/shared/frontend/ui';

export default {
  component: CardItem,
  title: 'Design system/Molecules/Card Item',
};

const CardItemStory: Story<CardItemProps> = args => <CardItem {...args} />;

CardItemStory.args = {
  title: 'Card example',
  description: 'There is Baby Yoda!',
  imgUrl: 'https://www.barrandov.tv/obrazek/202001/5e145c6414a40/crop-315674-vystrizek_897x505.jpg'
};

export { CardItemStory };
