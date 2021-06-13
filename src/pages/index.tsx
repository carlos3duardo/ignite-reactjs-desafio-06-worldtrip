import { Box, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import Interests from '../components/Home/Interests';
import WelcomeBanner from '../components/Home/WelcomeBanner';

import { request } from '../services/datocms.js';
import ContinentSlider from '../components/Home/ContinentSlider';

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

interface ContinentProps {
  id: string;
  name: string;
  slug: string;
  headline: string;
  banner: {
    url: string;
  };
}
interface HomeProps {
  banner: BannerProps;
  interests: InterestProps[];
  continents: ContinentProps[];
}

export default function Home({
  banner,
  interests,
  continents,
}: HomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <WelcomeBanner title={banner.title} subtitle={banner.subtitle} />
      <Interests interests={interests} />
      <Box mt={20} pt={14}>
        <Heading
          as="h4"
          textAlign="center"
          fontSize="3xl"
          position="relative"
          mb={14}
          _before={{
            position: 'absolute',
            content: '""',
            width: '90px',
            height: '2px',
            backgroundColor: '#000',
            top: '-50px',
            left: '50%',
            marginLeft: '-45px',
          }}
        >
          Let's go?
          <br />
          Choose a continent.
        </Heading>

        <ContinentSlider continents={continents} />
      </Box>
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

  const interestList = await request(
    `{ allInterests(orderBy: _createdAt_ASC) { id name icon { url } } } `,
  );

  // continents

  const continentList = await request(
    `{ allContinents { id slug name headline banner { url } } }`,
  );

  return {
    props: {
      banner,
      interests: interestList.allInterests,
      continents: continentList.allContinents,
    },
  };
};
