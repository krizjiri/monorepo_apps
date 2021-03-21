import React from 'react';
import { Box } from '@material-ui/core';

import { AppBar } from 'libs/ui/src/lib/Organisms/AppBar/AppBar';
import { Loader } from 'libs/ui/src/lib/Atoms/Loader/Loader';

type Props = {
  title;
  loading?: boolean;
};

const Page: React.FC<Props> = ({ title, children, loading }) => {
  return (
    <>
      <AppBar title={title} />
      {loading ? (
        <Loader />
      ) : (
        <Box component="div" p={1}>
          {children}
        </Box>
      )}
    </>
  );
};

export { Page };
