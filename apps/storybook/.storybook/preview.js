import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { configureActions } from '@storybook/addon-actions';

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
});

const theme = createMuiTheme({
  palette: {},
});

export const parameters = {
  controls: { expanded: true },
};

export const decorators = [
  (Story, Context) => {
    console.log(Context);
    return (
      <ThemeProvider theme={theme}>
        <Story {...Context} />
      </ThemeProvider>
    );
  },
];
