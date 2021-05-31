import Head from 'next/head';
import Header from '../components/Header';
import Interests from '../components/Home/Interests';
import WelcomeBanner from '../components/Home/WelcomeBanner';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <Header />
      <WelcomeBanner />
      <Interests />
    </>
  );
}
