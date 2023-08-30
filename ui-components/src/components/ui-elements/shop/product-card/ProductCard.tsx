import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import ProductImage from 'src/images/product2.jpg';
import Typography from '../../common/Typography';

const ProductCard = () => {
  const styles = useMultiStyleConfig('ProductCardTheme');

  return (
    <Box __css={styles.container}>
      <Box __css={styles.imageContainer}>
        <Image src={ProductImage} __css={styles.image} />
      </Box>
      <Box __css={styles.inner}>
        <Flex>
          <Text
            fontSize={'2rem'}
            fontFamily={'main'}
            fontWeight={400}
            mr={'1rem'}
          >
            $0.80
          </Text>
          <Text
            fontSize={'1.8rem'}
            fontFamily={'main'}
            fontWeight={400}
            textDecoration={'line-through'}
            color={COLOR_PALETTE.SECONDARY}
          >
            $0.95
          </Text>
        </Flex>
        <Box mt={'1.5rem'}>
          <Typography size={2.3} bold={500}>
            Nikon 22.0.5
          </Typography>
        </Box>
        <Box pt={'1.8rem'}>
          <Button __css={styles.button}>Buy Now</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default withChakraThemeProvider(ProductCard);
