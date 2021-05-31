import { Flex, Grid, GridItem, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

import SwitchColorMode from '../SwitchColorMode';

export default function Header(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
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
              colorMode === 'light' ? '/img/logo.svg' : '/img/logo-darkmode.svg'
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
  );
}
