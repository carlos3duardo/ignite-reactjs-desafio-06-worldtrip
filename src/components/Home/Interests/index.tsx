import { chakra, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface InterestProps {
  id: string;
  name: string;
  icon: {
    url: string;
  };
}

interface InterestListProps {
  interests: InterestProps[];
}

export default function Interests({
  interests,
}: InterestListProps): JSX.Element {
  return (
    <chakra.main
      width="100%"
      maxWidth="1120px"
      margin="0 auto"
      padding="0 1.25rem"
    >
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
        gap={{ base: 8, md: 4 }}
      >
        {interests.map((interest, i) => (
          <GridItem
            key={interest.id}
            colSpan={{ base: i === 4 ? 2 : 1, md: 1 }}
          >
            <Flex
              direction={{ base: 'row', md: 'column' }}
              justify="center"
              align="center"
            >
              <chakra.figure
                textAlign="center"
                width={{ base: '28px', md: '88px' }}
                height={{ base: '28px', md: '88px' }}
                display="block"
                position="relative"
                margin={{ base: '0 1rem', md: '' }}
              >
                <Image
                  src={interest.icon.url}
                  layout="fill"
                  alt={interest.name}
                />
              </chakra.figure>
              <Text fontSize="2xl" textAlign="center">
                {interest.name}
              </Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </chakra.main>
  );
}
