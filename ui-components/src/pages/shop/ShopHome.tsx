import { Container, Flex, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import { FloatingActionButton } from 'src/components';
import AppModal from 'src/components/ui-elements/app-modal/AppModal';
import ProductCard from 'src/components/ui-elements/shop/product-card/ProductCard';

const ShopHome = ({ products }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseAddProduct = () => setIsOpen(false);
  const action = (id: string, count: number) => {
    console.log(id, count);
  };
  return (
    <Container padding={'5rem'}>
      <SimpleGrid columns={5} spacing={'2rem'}>
        {products?.map((item: any) => (
          <ProductCard
            imagePath={item?.imagePath || ''}
            title={item?.title}
            discountedPrice={item?.discountedPrice}
            originalPrice={item?.originalPrice}
            key={`${item?.id}_${item?.title}`}
          />
        ))}
      </SimpleGrid>
      <Flex alignItems={'flex-start'} flexWrap={'wrap'}></Flex>
    </Container>
  );
};

export default ShopHome;
