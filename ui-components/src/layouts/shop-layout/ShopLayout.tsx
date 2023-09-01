import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from 'src/components/ui-elements/common/Navbar';

const ShopLayout = ({
  navbarLinks,
  onLogout,
}: {
  navbarLinks: Array<{ name: string; to: string }>;
  onLogout: () => void;
}) => {
  return (
    <Container>
      <Navbar navbarLinks={navbarLinks} onLogout={onLogout} />
      <Box paddingTop={'8rem'}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default ShopLayout;
