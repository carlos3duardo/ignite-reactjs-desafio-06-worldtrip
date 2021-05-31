import { Box, chakra, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function Interests(): JSX.Element {
  return (
    <chakra.main maxWidth="1120px" margin="0 auto">
      <Stack direction="row" width="100%" justify="space-between">
        <Box>
          <chakra.figure textAlign="center">
            <Image
              src="/img/icon-cocktail.svg"
              width={85}
              height={85}
              alt="Vida noturna"
            />
          </chakra.figure>
          <Text fontSize="2xl" textAlign="center">
            Vida noturna
          </Text>
        </Box>
        <Box>
          <chakra.figure textAlign="center">
            <Image
              src="/img/icon-cocktail.svg"
              width={85}
              height={85}
              alt="Vida noturna"
            />
          </chakra.figure>
          <Text fontSize="2xl" textAlign="center">
            Vida noturna
          </Text>
        </Box>
        <Box>
          <chakra.figure textAlign="center">
            <Image
              src="/img/icon-cocktail.svg"
              width={85}
              height={85}
              alt="Vida noturna"
            />
          </chakra.figure>
          <Text fontSize="2xl" textAlign="center">
            Vida noturna
          </Text>
        </Box>
        <Box>
          <chakra.figure textAlign="center">
            <Image
              src="/img/icon-cocktail.svg"
              width={85}
              height={85}
              alt="Vida noturna"
            />
          </chakra.figure>
          <Text fontSize="2xl" textAlign="center">
            Vida noturna
          </Text>
        </Box>
        <Box>
          <chakra.figure textAlign="center">
            <Image
              src="/img/icon-cocktail.svg"
              width={85}
              height={85}
              alt="Vida noturna"
            />
          </chakra.figure>
          <Text fontSize="2xl" textAlign="center">
            Vida noturna
          </Text>
        </Box>
      </Stack>
    </chakra.main>
  );
}
