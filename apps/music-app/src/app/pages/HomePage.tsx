import React from 'react';

import { HomeTemplate } from 'libs/ui/src/lib/Template/HomeTemplate';

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
