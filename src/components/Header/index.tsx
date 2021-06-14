import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  Flex,
  Grid,
  GridItem,
  IconButton,
  useColorMode,
  Icon,
} from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';

import Link from 'next/link';
import SwitchColorMode from '../SwitchColorMode';

export default function Header(): JSX.Element {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <Flex as="header">
      <Grid
        templateColumns="auto auto auto"
        height="100px"
        width="100%"
        maxWidth="1120px"
        margin="0 auto"
        padding="0 1.25rem"
      >
        <GridItem alignSelf="center" justifySelf="left">
          {router.pathname !== '/' && (
            <Link href="/">
              <IconButton
                icon={<Icon as={FiChevronLeft} />}
                variant="ghost"
                aria-label="Back to Home"
              />
            </Link>
          )}
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
