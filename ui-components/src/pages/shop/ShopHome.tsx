import { Container, Flex, SimpleGrid } from '@chakra-ui/react';
import { ProductCard } from 'src/components';

const ShopHome = () => {
  return (
    <Container padding={'5rem'}>
      <SimpleGrid columns={5} spacing={'1rem'}>
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
      </SimpleGrid>
      <Flex alignItems={'flex-start'} flexWrap={'wrap'}></Flex>
    </Container>
  );
};

export default ShopHome;
