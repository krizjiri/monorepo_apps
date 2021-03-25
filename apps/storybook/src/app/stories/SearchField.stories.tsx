import React from 'react';
import { Story } from '@storybook/react';

import {
  SearchField,
  SearchFieldProps,
} from '@monorepo-test/shared/frontend/ui';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

export default {
  component: SearchField,
  title: 'Design system/Molecules/Search Field',
  argTypes: { onClick: { argTypesRegex: '^on.*' } },
};

const SearchFieldPlayground: Story<SearchFieldProps> = args => {
  const loading = boolean('Loading', false);

  return (
    <SearchField loading={loading} onSubmit={action('onSubmit')} {...args} />
  );
};

SearchFieldPlayground.args = {};

export { SearchFieldPlayground };
