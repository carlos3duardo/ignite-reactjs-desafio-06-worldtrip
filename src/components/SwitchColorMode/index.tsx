import { IconButton, Tooltip, useColorMode } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

function SwitchColorMode(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip
      hasArrow
      shouldWrapChildren
      label={colorMode === 'light' ? 'Dark mode' : 'Light mode'}
    >
      <IconButton
        onClick={toggleColorMode}
        aria-label={colorMode === 'light' ? 'Dark mode' : 'Light mode'}
        icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
        variant="ghost"
      />
    </Tooltip>
  );
}

export default SwitchColorMode;
