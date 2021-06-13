import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import theme from '../styles/themes/default';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
