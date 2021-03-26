import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { configureActions } from '@storybook/addon-actions';
import { AppConfig } from '@monorepo-test/shared/frontend/utils';

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
    return (
      <AppConfig variant="movie" appName="storybook">
        <ThemeProvider theme={theme}>
          <Story {...Context} />
        </ThemeProvider>
      </AppConfig>
    );
  },
];
