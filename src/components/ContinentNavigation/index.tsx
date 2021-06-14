import { Box, chakra, Grid, GridItem, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

interface ContinentNavigationProps {
  continents: ContinentProps[];
  excludes?: string[];
}

export default function ContinentNavigation({
  continents,
  excludes,
}: ContinentNavigationProps): JSX.Element {
  const [continentList, setContinentList] = useState([]);

  useEffect(() => {
    setContinentList(() =>
      continents.filter(continent => {
        return !excludes.includes(continent.id);
      }),
    );
  }, [continents, excludes]);

  return (
    <Box width="100%" maxWidth="1120px" margin="0 auto" padding="20px 1.25rem">
      <Heading as="h2" fontSize="2xl" marginBottom="2rem">
        Another continents
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
        gap={{ base: 2, md: 10 }}
      >
        {continentList.map((continent, index) => (
          <GridItem
            key={continent.id}
            backgroundImage={continent.banner.url}
            backgroundPosition="center center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            height="96px"
            position="relative"
            borderRadius="0.5rem"
            overflow="hidden"
            colSpan={{
              base: index + 1 === continents.length - 1 ? 2 : 1,
              md: 1,
            }}
          >
            <Link href={`/continent/${continent.slug}`} passHref>
              <chakra.a
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                backgroundColor="rgba(0, 0, 0, 0.3)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                fontSize="large"
                fontWeight="bold"
                transition="all 0.2s ease"
                textAlign="center"
                _hover={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'orange.300',
                }}
              >
                {continent.name}
              </chakra.a>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

ContinentNavigation.defaultProps = {
  excludes: [],
};
