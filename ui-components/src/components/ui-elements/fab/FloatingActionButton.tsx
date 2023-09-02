import { AddIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

interface SelfProps {
  ariaLabel?: string;
  icon?: any;
  respectiveToParent?: boolean;
}

const FloatingActionButton = ({
  ariaLabel,
  icon,
  respectiveToParent,
}: SelfProps) => {
  return (
    <IconButton
      aria-label={ariaLabel || 'add'}
      icon={
        icon || (
          <AddIcon
            width={'2.5rem'}
            height={'2.5rem'}
            color={COLOR_PALETTE.WHITE}
          />
        )
      }
      position={respectiveToParent ? 'absolute' : 'fixed'}
      bottom={'3rem'}
      right={'3rem'}
      width={'6rem'}
      height={'6rem'}
      border={0}
      backgroundColor={COLOR_PALETTE.PRIMARY}
      cursor={'pointer'}
      borderRadius={'1.1rem'}
      boxShadow={'0 0 1rem 0 rgba(0,0,0,0.3)'}
      _hover={{
        backgroundColor: COLOR_PALETTE.SECONDARY,
      }}
    />
  );
};

export default withChakraThemeProvider(FloatingActionButton);
