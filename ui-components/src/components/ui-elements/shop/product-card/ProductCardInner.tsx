import { Box, useMultiStyleConfig } from '@chakra-ui/react';
import ImageContainer from './ImageContainer';
import PriceFlex from './PriceFlex';
import ProductTitleBox from './ProductTitleBox';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import ActionBox from './ActionBox';

const ProductCardInner = () => {
  const styles = useMultiStyleConfig('ProductCardTheme');
  return (
    <Box __css={styles.container}>
      <ImageContainer styles={styles} />
      <Box __css={styles.inner}>
        <PriceFlex discountedPrice={110} originalPrice={150} />
        <ProductTitleBox />
        <ActionBox />
      </Box>
    </Box>
  );
};

export default withChakraThemeProvider(ProductCardInner);
