// Overriding Chakra UI variables

import { extendTheme } from '@chakra-ui/react';

const theme = {
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
};

const customTheme = extendTheme(theme);

export default customTheme;
