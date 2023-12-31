import { Container, Flex, SimpleGrid } from '@chakra-ui/react';
import ProductCard from 'src/components/ui-elements/shop/product-card/ProductCard';

const ShopHome = ({ products, productAction }: any) => {
  const action = (id: string, count: number) => {
    productAction(id, count);
  };

  return (
    <Container padding={'5rem'}>
      <SimpleGrid columns={5} spacing={'2rem'}>
        {products?.map((item: any) => (
          <ProductCard
            imagePath={item?.image}
            title={item?.title}
            discountedPrice={item?.discountedPrice}
            originalPrice={item?.originalPrice}
            key={`${item?.id}_${item?.title}`}
            id={item?.id}
            count={item?.count}
            actionHandler={action}
          />
        ))}
      </SimpleGrid>
      <Flex alignItems={'flex-start'} flexWrap={'wrap'}></Flex>
    </Container>
  );
};

export default ShopHome;
