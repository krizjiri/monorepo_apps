import React from 'react';
import { Meta, Story } from '@storybook/react';

import {
  SearchField,
  SearchFieldProps,
} from '@monorepo-test/shared/frontend/ui';

export default {
  component: SearchField,
  title: 'Design system/Molecules/Search Field',
  parameters: { layout: 'centered' },
  args: {
    initialValue: 'Search text',
    loading: false,
    error: false,
  },
  argTypes: {
    onSubmit: {
      action: 'search executed',
      description: 'Callback function, searched value as function param',
    },
    initialValue: {
      description: 'Initial value of SearchField, set before user interaction',
    },
    loading: {
      defaultValue: { summary: false },
      description: 'Indicates search execution, search is disabled when true',
    },
    error: {
      defaultValue: { summary: false },
      description: 'Indicates failed search',
    },
  },
} as Meta;

const SearchFieldPlayground: Story<SearchFieldProps> = args => {
  return <SearchField {...args} />;
};

export { SearchFieldPlayground };
