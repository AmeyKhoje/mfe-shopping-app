import { Box, Image, PartsStyleObject, Skeleton } from '@chakra-ui/react';
import { memo, useContext } from 'react';
import productCardContext from 'src/contexts/ProductCardContext';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

interface SelfProps {
  styles: PartsStyleObject;
}

const ImageContainer = memo(({ styles }: SelfProps) => {
  const { imgPath } = useContext(productCardContext);
  return (
    <Box __css={styles.imageContainer}>
      <Skeleton isLoaded={!!imgPath} height={'100%'} width={'100%'}>
        <Image src={imgPath} __css={styles.image} />
      </Skeleton>
    </Box>
  );
});

export default withChakraThemeProvider(ImageContainer);
