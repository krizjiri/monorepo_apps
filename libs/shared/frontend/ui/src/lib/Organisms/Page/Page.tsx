import React from 'react';
import { Box } from '@material-ui/core';

import { AppBar, Loader } from '../../..';

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
