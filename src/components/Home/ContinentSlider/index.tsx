import Link from 'next/link';
import { Box, chakra, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import styles from './ContinentSlider.module.scss';

interface ContinentProps {
  id: string;
  slug: string;
  name: string;
  headline: string;
  banner: {
    url: string;
  };
}

interface ContinentList {
  continents: ContinentProps[];
}

export default function ContinentSlider({
  continents,
}: ContinentList): JSX.Element {
  return (
    <Box width="100%" maxWidth="1120px" margin="0 auto">
      <Swiper
        navigation
        pagination
        loop
        autoplay={{
          delay: 4000,
        }}
        className={styles.continentSlider}
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <chakra.figure width="100%" display="block" position="relative">
              <chakra.div
                position="absolute"
                top="0"
                right="0"
                bottom="0"
                left="0"
                backgroundColor="rgba(0, 0, 0, 0.42)"
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
              >
                <Link key={continent.id} href={`/continent/${continent.slug}`}>
                  <a>
                    <Heading
                      as="h3"
                      color="#ffffff"
                      textAlign="center"
                      size="2xl"
                    >
                      {continent.name}
                    </Heading>
                    <Text color="#ffffff" textAlign="center" fontSize="xl">
                      {continent.headline}
                    </Text>
                  </a>
                </Link>
              </chakra.div>
              <chakra.img
                src={continent.banner.url}
                alt={continent.name}
                width="100%"
                height="420"
                objectFit="cover"
              />
            </chakra.figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
