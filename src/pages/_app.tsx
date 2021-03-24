import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Provider as NextAuthprovider } from 'next-auth/client';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthprovider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthprovider>
  )
}

export default MyApp
