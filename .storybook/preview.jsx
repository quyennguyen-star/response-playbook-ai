import '../tokens.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from '../src/theme/theme';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <MantineProvider theme={theme}>
        <Story />
      </MantineProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: "todo"
    }
  },
};

export default preview;