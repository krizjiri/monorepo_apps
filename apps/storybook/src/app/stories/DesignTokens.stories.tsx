import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { Meta } from '@storybook/react';

export default {
  title: 'Design tokens/Palette',
  parameters: { layout: 'centered' },
} as Meta;

type ColorType = {
  label: string;
  colorPath: string;
};

const colors: ColorType[] = [
  { label: 'Primary', colorPath: 'primary.main' },
  { label: 'Secondary', colorPath: 'secondary.main' },
  { label: 'Success', colorPath: 'success.main' },
  { label: 'Info', colorPath: 'info.main' },
  { label: 'Warning', colorPath: 'warning.main' },
  { label: 'Error', colorPath: 'error.main' },
  { label: 'Text', colorPath: 'text.primary' },
  { label: 'Text secondary', colorPath: 'text.secondary' },
  { label: 'Text disabled', colorPath: 'text.disabled' },
];

const getFormattedText = (text: string) => (
  <Typography variant="body1" gutterBottom>
    {text}
  </Typography>
);

const getColors = () => {
  return colors.map(color => {
    const colorPrefix = !color.colorPath.includes('text')
      ? color.colorPath.split('.')
      : undefined;

    return (
      <Grid item xs={12} sm={4}>
        <Box
          bgcolor={color.colorPath}
          color={
            colorPrefix
              ? `${colorPrefix[0]}.contrastText`
              : 'primary.contrastText'
          }
          p={2}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {getFormattedText(color.label)}
        </Box>
      </Grid>
    );
  });
};

const Palette = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Color palette
      </Typography>
      <Grid container spacing={1}>
        {getColors()}
      </Grid>
    </>
  );
};

export { Palette };
