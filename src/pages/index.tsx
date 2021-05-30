import Head from 'next/head';
import Image from 'next/image';
import {
  Box,
  chakra,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import SwitchColorMode from '../components/SwitchColorMode';

export default function Home(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Flex as="header">
        <Grid
          templateColumns="200px auto 200px"
          height="100px"
          width="100%"
          maxWidth="1120px"
          margin="0 auto"
        >
          <GridItem alignSelf="center" justifySelf="left">
            &nbsp;
          </GridItem>
          <GridItem alignSelf="center" justifySelf="center">
            <Image
              src={
                colorMode === 'light'
                  ? '/img/logo.svg'
                  : '/img/logo-darkmode.svg'
              }
              alt="worldtrip"
              width={187}
              height={46}
            />
          </GridItem>
          <GridItem alignSelf="center" justifySelf="right">
            <SwitchColorMode />
          </GridItem>
        </Grid>
      </Flex>
      <main>
        <Box
          height={360}
          backgroundImage="/img/home-banner-background.png"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundSize="cover"
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
      </main>
    </>
  );
}
