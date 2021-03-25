import React from 'react';
import { Story } from '@storybook/react';
import { nanoid } from 'nanoid';

import { GridList, GridListProps } from '@monorepo-test/shared/frontend/ui';
import { ResponseItem } from '@monorepo-test/shared/types';
import { object } from '@storybook/addon-knobs';

export default {
  component: GridList,
  title: 'Design system/Molecules/Grid list',
};

const getItem = (): ResponseItem => ({
  id: nanoid(),
  name: 'Card example',
  imgUrl:
    'https://www.barrandov.tv/obrazek/202001/5e145c6414a40/crop-315674-vystrizek_897x505.jpg',
  mediaType: 'movie',
});

export const primary: Story<GridListProps> = () => {
  const data = object('data', Array(10).fill(getItem()));

  return <GridList data={data} />;
};

primary.args = {};
