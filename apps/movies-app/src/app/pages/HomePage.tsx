import React from 'react';

import { HomeTemplate } from 'libs/ui/src/lib/Template/HomeTemplate';

type Props = {};

const HomePage: React.FC<Props> = () => {
  return (
    <HomeTemplate
      media="movie"
      pageTitle={'Movies'}
      searchTitle={'Movie search'}
    />
  );
};

export { HomePage };
