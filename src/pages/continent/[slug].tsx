import {
  Box,
  chakra,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import Header from '../../components/Header';

import { request, getAllContinentsSlug } from '../../services/datocms.js';

interface ContinentProps {
  id: string;
  slug: string;
  name: string;
  headline: string;
  description: string;
  countries: number;
  languages: number;
  banner: {
    url: string;
  };
}

interface CityProps {
  id: string;
  name: string;
  arrivals: string;
  picture: {
    url: string;
  };
  country: {
    id: string;
    name: string;
    flag: {
      url: string;
    };
  };
}

interface PageProps {
  continent: ContinentProps;
  cities: CityProps[];
}

export default function Home({ continent, cities }: PageProps): JSX.Element {
  console.log(cities);
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
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bgColor="rgba(0, 0, 0, 0.2)"
        >
          <Box
            width="100%"
            maxWidth="1120"
            height="100%"
            margin="0 auto"
            display="flex"
            flexDirection="column-reverse"
            padding="40px 0"
            zIndex="3"
          >
            <Heading as="h2" fontSize="5xl" color="white">
              {continent?.name}
            </Heading>
          </Box>
        </Box>
      </chakra.figure>

      <Grid
        width="100%"
        maxWidth="1120px"
        margin="0 auto"
        padding="40px 0"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colSpan={3}>
          <Box
            dangerouslySetInnerHTML={{
              __html: continent.description.replace(/\n/g, '<br/>'),
            }}
          />
        </GridItem>
        <GridItem colSpan={2} paddingTop="3rem">
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem>
              <Heading color="primary" textAlign="center">
                {continent.countries}
              </Heading>
              <Text textAlign="center" fontWeight="bold" color="gray.500">
                coutries
              </Text>
            </GridItem>
            <GridItem>
              <Heading color="primary" textAlign="center">
                {continent.languages}
              </Heading>
              <Text textAlign="center" fontWeight="bold" color="gray.500">
                languages
              </Text>
            </GridItem>
            <GridItem>
              <Heading color="primary" textAlign="center">
                {cities.length}
              </Heading>
              <Text textAlign="center" fontWeight="bold" color="gray.500">
                cities +100
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={5}>
          <Heading as="h2" fontSize="2xl" marginTop="2rem">
            Cities +100
          </Heading>

          <Grid
            width="100%"
            maxWidth="1120px"
            margin="0 auto"
            padding="40px 0"
            templateColumns="repeat(4, 1fr)"
            gap={10}
          >
            {cities.map(city => (
              <GridItem
                borderWidth="1px"
                borderStyle="solid"
                borderColor="orange.300"
                borderRadius="0.25rem"
                overflow="hidden"
              >
                <chakra.figure>
                  <chakra.img
                    src={city.picture ? city.picture.url : '/img/pin.jpg'}
                    width="100%"
                    height="160px"
                    objectFit="cover"
                    alt={city.name}
                  />
                </chakra.figure>
                <Flex
                  dir="row"
                  align="top"
                  justify="space-between"
                  padding="20px"
                >
                  <Box>
                    <Text fontSize="normal" fontWeight="bold">
                      {city.name}
                    </Text>
                    <Text fontSize="small" fontWeight="bold" color="gray.500">
                      {city.country.name}
                    </Text>
                    <Text fontSize="small" color="gray.500">
                      Arrivals: {city.arrivals}M
                    </Text>
                  </Box>
                  <Box>
                    <chakra.figure
                      width="30px"
                      height="30px"
                      borderRadius="15px"
                      overflow="hidden"
                      display="block"
                    >
                      <chakra.img
                        display="block"
                        src={city.country.flag.url}
                        width="30px"
                        height="30px"
                        alt={city.country.name}
                        objectFit="cover"
                      />
                    </chakra.figure>
                  </Box>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>

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
      countries
      languages
      headline
      description
      banner { url }
    }
  }`);

  const { continent } = continentResponse;

  const countriesResponse = await request(
    `{allCountries(filter: {continent: {eq: ${continent.id}}}) { id }}`,
  );

  const countriesId = countriesResponse.allCountries.map(countrie =>
    parseInt(countrie.id),
  );

  const citiesResponse = await request(`{
    allCities(filter: {country: {in: [${countriesId}]}}, orderBy: arrivals_DESC) {
      id
      name
      arrivals
      picture {
        url
      }
      country {
        id
        name
        flag {
          url
        }
      }
    }
  }`);

  const cities = citiesResponse.allCities;

  return {
    props: {
      continent,
      cities,
    },
  };
};
