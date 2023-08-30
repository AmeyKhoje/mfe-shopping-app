import { Button } from '@chakra-ui/react';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';
import { navigateToRemote } from 'utilityFunctions/helpers';

const NavLink = ({
  to,
  name,
  styleProps,
  isUnderlined,
}: {
  to: string;
  name: string;
  styleProps?: object;
  isUnderlined?: boolean;
}) => {
  const handleNavigate = () => {
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
      fontWeight={600}
      letterSpacing={'0.1rem'}
    >
      {name}
    </Button>
  );
};

export default NavLink;
