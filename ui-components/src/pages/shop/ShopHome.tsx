import { Container, Flex, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import { FloatingActionButton } from 'src/components';
import AppModal from 'src/components/ui-elements/app-modal/AppModal';
import ProductCard from 'src/components/ui-elements/shop/product-card/ProductCard';

const ShopHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseAddProduct = () => setIsOpen(false);
  const action = (id: string, count: number) => {
    console.log(id, count);
  };
  return (
    <Container padding={'5rem'}>
      <SimpleGrid columns={5} spacing={'2rem'}>
        <ProductCard
          imagePath={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLGdlGexTRDFsaNxBssWVNzQiKsb9Qy2big&usqp=CAU'
          }
          title={'Nikon 350D'}
          discountedPrice={220}
          originalPrice={260}
          actionHandler={action}
        />
        <ProductCard
          imagePath={''}
          title={'Nikon 350D'}
          discountedPrice={220}
          originalPrice={260}
        />
        <ProductCard
          imagePath={''}
          title={'Nikon 350D'}
          discountedPrice={220}
          originalPrice={260}
        />
        <ProductCard
          imagePath={''}
          title={'Nikon 350D'}
          discountedPrice={220}
          originalPrice={260}
        />
        <ProductCard
          imagePath={''}
          title={'Nikon 350D'}
          discountedPrice={220}
          originalPrice={260}
        />
        <ProductCard
          imagePath={''}
          title={'Nikon 350D'}
          discountedPrice={220}
          originalPrice={260}
        />
        <ProductCard
          imagePath={''}
          title={'Nikon 350D'}
          discountedPrice={220}
          originalPrice={260}
        />
        <ProductCard
          imagePath={''}
          title={'Nikon 350D'}
          discountedPrice={220}
          originalPrice={260}
        />
        <ProductCard
          imagePath={''}
          title={'Nikon 350D'}
          discountedPrice={220}
          originalPrice={260}
        />
        <ProductCard
          imagePath={''}
          title={'Nikon 350D'}
          discountedPrice={220}
          originalPrice={260}
        />
        <ProductCard
          imagePath={''}
          title={'Nikon 350D'}
          discountedPrice={220}
          originalPrice={260}
        />
      </SimpleGrid>
      <Flex alignItems={'flex-start'} flexWrap={'wrap'}></Flex>
      <FloatingActionButton
        ariaLabel="add-product"
        onClick={() => setIsOpen(true)}
      />
      <AppModal
        content={'Hello Amey'}
        defaultOpen
        isClosable
        header={'Add Product'}
        open={isOpen}
        onClose={handleCloseAddProduct}
      />
    </Container>
  );
};

export default ShopHome;
