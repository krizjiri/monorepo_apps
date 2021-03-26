import React from 'react';
import { Meta, Story } from '@storybook/react';
import { nanoid } from 'nanoid';

import { GridList, GridListProps } from '@monorepo-test/shared/frontend/ui';
import { ResponseItem } from '@monorepo-test/shared/types';
import { object, withKnobs } from '@storybook/addon-knobs';

export default {
  component: GridList,
  title: 'Design system/Molecules/Grid list',
  decorators: [withKnobs],
  params: {
    layout: 'centered',
  },
} as Meta;

const getItem = (): ResponseItem => ({
  id: nanoid(),
  name: 'Card example',
  imgUrl: 'https://i.imgur.com/e5ufyNO.jpeg',
  mediaType: 'movie',
});

export const primary: Story<GridListProps> = () => {
  const data = object('data', Array(10).fill(getItem()));

  return <GridList data={data} />;
};

primary.args = {};
