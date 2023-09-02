import { AddIcon, MinusIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, useMultiStyleConfig } from '@chakra-ui/react';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

const CounterButton = ({
  count = 0,
  title,
}: {
  count: number;
  title: string;
}) => {
  const styles = useMultiStyleConfig('CounterCardTheme');
  return (
    <Box>
      {!count ? (
        <Button __css={styles.button}>{title}</Button>
      ) : (
        <Flex alignItems={'center'} width={'100%'}>
          <Box __css={styles.countDisplay}>{count}</Box>
          <Box __css={styles.counterButtonContainer} mr={'1rem'}>
            <Button __css={styles.counterButton}>
              <MinusIcon width={'1.5rem'} height={'1.5rem'} color={'inherit'} />
            </Button>
          </Box>
          <Box __css={styles.counterButtonContainer}>
            <Button __css={styles.counterButton}>
              <AddIcon width={'1.5rem'} height={'1.5rem'} color={'inherit'} />
            </Button>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default withChakraThemeProvider(CounterButton);
