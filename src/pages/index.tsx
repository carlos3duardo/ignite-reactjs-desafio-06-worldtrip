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

interface InterestProps {
  id: string;
  name: string;
  icon: {
    url: string;
  };
}
interface HomeProps {
  banner: BannerProps;
  interests: InterestProps[];
}

export default function Home({ banner, interests }: HomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <Header />
      <WelcomeBanner title={banner.title} subtitle={banner.subtitle} />
      <Interests interests={interests} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // banner content

  const bannerTextResponse = await request(`{ welcome { id title subtitle }}`);

  const banner = {
    title: bannerTextResponse.welcome.title,
    subtitle: bannerTextResponse.welcome.subtitle,
  };

  // interest items

  const interestResponse = await request(`{
    allInterests(orderBy: _createdAt_ASC) {
      id
      name
      icon {
        url
      }
    }
  }
  `);

  return {
    props: { banner, interests: interestResponse.allInterests },
  };
};
