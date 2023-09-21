import { Button } from '@chakra-ui/react';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';
import { navigateToRemote } from 'utilityFunctions/helpers';

const NavLink = ({
  to,
  name,
  styleProps,
  isUnderlined,
  disabled,
}: {
  to: string;
  name: string;
  styleProps?: object;
  isUnderlined?: boolean;
  disabled?: boolean;
}) => {
  const handleNavigate = () => {
    if (disabled) {
      return;
    }
    navigateToRemote(to);
  };

  return (
    <Button
      onClick={handleNavigate}
      {...styleProps}
      as={'a'}
      color={COLOR_PALETTE.WHITE}
      cursor={'pointer'}
      textDecoration={isUnderlined ? 'underline' : 'none'}
      fontWeight={500}
      background={'none'}
      _hover={{ background: 'none' }}
      letterSpacing={'0.1rem'}
    >
      {name}
    </Button>
  );
};

export default NavLink;
