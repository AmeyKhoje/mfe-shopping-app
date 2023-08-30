import { Container, Flex, SimpleGrid } from '@chakra-ui/react';
import { ProductCard } from 'src/components';

const ShopHome = () => {
  return (
    <Container padding={'5rem'}>
      <Flex alignItems={'flex-start'} flexWrap={'wrap'}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Flex>
    </Container>
  );
};

export default ShopHome;
