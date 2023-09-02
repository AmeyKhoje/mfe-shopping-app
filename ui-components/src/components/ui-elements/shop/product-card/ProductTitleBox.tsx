import { Box } from '@chakra-ui/react';
import Typography from '../../common/Typography';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import { memo, useContext } from 'react';
import productCardContext from 'src/contexts/ProductCardContext';

const ProductTitleBox = memo(() => {
  const { title } = useContext(productCardContext);
  return (
    <Box mt={'1.5rem'}>
      <Typography size={2.3} bold={500}>
        {title}
      </Typography>
    </Box>
  );
});

export default withChakraThemeProvider(ProductTitleBox);
