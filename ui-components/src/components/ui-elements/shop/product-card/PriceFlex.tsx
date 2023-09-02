import { Flex, Text } from '@chakra-ui/react';
import { memo, useContext } from 'react';
import productCardContext from 'src/contexts/ProductCardContext';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

const PriceFlex = memo(() => {
  const { originalPrice, discountedPrice } = useContext(productCardContext);

  return (
    <Flex userSelect={'none'}>
      <Text fontSize={'2rem'} fontFamily={'main'} fontWeight={400} mr={'1rem'}>
        {discountedPrice}
      </Text>
      <Text
        fontSize={'1.8rem'}
        fontFamily={'main'}
        fontWeight={400}
        textDecoration={'line-through'}
        color={COLOR_PALETTE.SECONDARY}
      >
        {originalPrice}
      </Text>
    </Flex>
  );
});

export default withChakraThemeProvider(PriceFlex);
