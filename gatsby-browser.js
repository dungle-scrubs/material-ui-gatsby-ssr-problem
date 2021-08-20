import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

// Components
import Layout from './src/components/layout';

// Theme
import theme from './src/theme/theme';

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
