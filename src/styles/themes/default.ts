// Overriding Chakra UI variables

import { extendTheme } from '@chakra-ui/react';

const theme = {
  styles: {
    global: props => ({
      body: {
        background: props.colorMode === 'light' ? 'white' : 'gray.800',
      },
    }),
  },
  fonts: {
    body: 'Titillium Web, Helvetica, Arial, sans-serif',
    heading: 'Titillium Web, Helvetica, Arial, sans-serif',
    mono: 'monospace',
  },
  fontWeights: {
    normal: 400,
    regular: 400,
    semibold: 500,
    bold: 700,
  },
  colors: {
    primary: '#ffba08',
  },
};

const customTheme = extendTheme(theme);

export default customTheme;
