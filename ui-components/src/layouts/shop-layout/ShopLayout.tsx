import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from 'src/components/ui-elements/common/Navbar';

const ShopLayout = ({
  navbarLinks,
}: {
  navbarLinks: Array<{ name: string; to: string }>;
}) => {
  return (
    <Container>
      <Navbar navbarLinks={navbarLinks} />
      <Box paddingTop={'8rem'}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default ShopLayout;
