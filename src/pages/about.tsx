import { GetStaticProps } from 'next';
import Head from 'next/head';
import { chakra, Box, Heading, Grid, GridItem, Icon } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { SiGithub } from 'react-icons/si';

import { request } from '../services/datocms.js';

interface AboutProps {
  title: string;
  description: string;
  repository: string;
  siteAuthor: string;
}

export default function About({
  title,
  description,
  repository,
  siteAuthor,
}: AboutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>about | worldtrip</title>
      </Head>
      <chakra.figure
        backgroundImage="img/about-banner.jpg"
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
              {title}
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
          <ReactMarkdown className="markdownParsed">
            {description}
          </ReactMarkdown>
          <Box mt={8} display="flex" flexDirection="row" alignItems="center">
            <Icon as={SiGithub} />
            <chakra.a href={repository} target="_blank" marginLeft="1rem">
              {repository}
            </chakra.a>
          </Box>
          {siteAuthor && (
            <Box mt={6} display="flex" flexDirection="row" alignItems="center">
              <Icon as={SiGithub} />
              <chakra.a href={repository} target="_blank" marginLeft="1rem">
                {repository}
              </chakra.a>
            </Box>
          )}
        </GridItem>
      </Grid>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutResponse = await request(`{
    about {
      id
      title
      description
      repository
      siteAuthor
    }
  }`);

  const { title, description, repository, siteAuthor } = aboutResponse.about;

  return {
    props: { title, description, repository, siteAuthor },
  };
};
