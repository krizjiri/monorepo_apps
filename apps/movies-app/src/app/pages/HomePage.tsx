import React from 'react';
import { HomeTemplate } from '@monorepo-test/shared/frontend/ui';

const HomePage: React.FC = () => {
  return (
    <HomeTemplate
      media="movie"
      pageTitle={'Movies'}
      searchTitle={'Movie search'}
    />
  );
};

export { HomePage };
