import { Box, chakra } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import Header from '../../components/Header';

import { request, getAllContinentsSlug } from '../../services/datocms.js';

interface ContinentProps {
  id: string;
  name: string;
  slug: string;
  headline: string;
  banner: {
    url: string;
  };
}

interface PageProps {
  continent: ContinentProps;
}

export default function Home({ continent }: PageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{continent.name} | worldtrip</title>
      </Head>

      <Header />

      <chakra.figure
        backgroundImage={continent.banner.url}
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        backgroundSize="cover"
        width="100%"
        height="500px"
      >
        {continent?.name}
      </chakra.figure>

      <Box
        as="footer"
        mt={16}
        p={4}
        borderTopWidth="1px"
        borderTopStyle="solid"
        borderTopColor="gray.200"
      >
        <Box width="100%" maxWidth="1120px" margin="0 auto">
          rodapé
        </Box>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const continents = await getAllContinentsSlug();

  return {
    paths: continents?.map(continent => `/continent/${continent.slug}`) || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const continentResponse = await request(`{
    continent(filter: {slug: {eq: "${slug}"}}) {
      id
      name
      slug
      languages
      headline
      description
      banner { url }
    }
  }`);

  return {
    props: {
      continent: continentResponse.continent,
    },
  };
};

/*
query MyQuery {
  allCities(filter: {country: {in: "40340163"}}) {
    id
    name
    country {
      id
      name
      flag {
        url
      }
    }
  }
}
*/
