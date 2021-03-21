import React from 'react';

import { HomeTemplate } from '@monorepo-test/shared/frontend/ui';

const HomePage: React.FC = () => {
  return (
    <HomeTemplate
      media="music"
      pageTitle={'Music'}
      searchTitle={'Search music'}
    />
  );
};

export { HomePage };
