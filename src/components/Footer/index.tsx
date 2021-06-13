import { Box, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

export default function Footer(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="footer"
      mt={4}
      p={4}
      borderTopWidth="1px"
      borderTopStyle="solid"
      borderTopColor={colorMode === 'light' ? 'gray.100' : 'gray.700'}
    >
      <Box width="100%" maxWidth="1120px" margin="0 auto" textAlign="center">
        <Link href="/about">
          <a>Sobre</a>
        </Link>
      </Box>
    </Box>
  );
}
