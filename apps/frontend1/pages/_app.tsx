import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp(appProps: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend1!</title>
      </Head>
      <main className='app'>
        <appProps.Component {...appProps.pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
