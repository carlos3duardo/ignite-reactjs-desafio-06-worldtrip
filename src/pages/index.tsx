import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Interests from '../components/Home/Interests';
import WelcomeBanner from '../components/Home/WelcomeBanner';

import { request } from '../services/datocms.js';

interface BannerProps {
  title: string;
  subtitle: string;
}
interface HomeProps {
  banner: BannerProps;
}

export default function Home({ banner }: HomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <Header />
      <WelcomeBanner title={banner.title} subtitle={banner.subtitle} />
      <Interests />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const bannerTextResponse = await request(`{ welcome { id title subtitle }}`);

  const banner = {
    title: bannerTextResponse.welcome.title,
    subtitle: bannerTextResponse.welcome.subtitle,
  };

  console.log(bannerTextResponse);

  return {
    props: { banner },
  };
};
