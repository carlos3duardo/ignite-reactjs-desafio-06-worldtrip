import { Box, chakra, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function WelcomeBanner(): JSX.Element {
  return (
    <Box
      height={360}
      backgroundImage="/img/home-banner-background.png"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      backgroundSize="cover"
      marginBottom="6rem"
    >
      <Flex
        margin="0 auto"
        maxWidth="1120px"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
        textColor="gray.100"
        position="relative"
      >
        <Box>
          <Heading as="h1" fontSize="5xl">
            5 Continentes,
            <br />
            infinitas possibilidades
          </Heading>
          <Text fontSize="2xl">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <chakra.figure
          transform="rotate(3deg);"
          position="absolute"
          right="0"
          bottom="-32px"
        >
          <Image
            width={452}
            height={307}
            src="/img/airplane.svg"
            alt="Avisão"
          />
        </chakra.figure>
      </Flex>
    </Box>
  );
}
