import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from 'src/components/ui-elements/common/Navbar';

const ShopLayout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default ShopLayout;
