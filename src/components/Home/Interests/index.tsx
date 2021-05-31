import { Box, chakra, Stack, Text } from '@chakra-ui/react';
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
    <chakra.main maxWidth="1120px" margin="0 auto">
      <Stack direction="row" width="100%" justify="space-between">
        {interests.map(interest => (
          <Box key={interest.id}>
            <chakra.figure textAlign="center">
              <Image
                src={interest.icon.url}
                width={85}
                height={85}
                alt={interest.name}
              />
            </chakra.figure>
            <Text fontSize="2xl" textAlign="center">
              {interest.name}
            </Text>
          </Box>
        ))}
      </Stack>
    </chakra.main>
  );
}
