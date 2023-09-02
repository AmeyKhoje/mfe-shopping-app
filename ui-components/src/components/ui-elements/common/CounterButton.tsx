import { AddIcon, MinusIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, useMultiStyleConfig } from '@chakra-ui/react';
import { useMemo } from 'react';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

const CounterButton = ({
  count = 0,
  title,
  handleAction,
}: {
  count: number;
  title: string;
  handleAction: (count: number) => void;
}) => {
  const styles = useMultiStyleConfig('CounterCardTheme');

  const memoizedCount = useMemo(() => {
    return count;
  }, [count]);

  const handleCounterAction = () => {
    handleAction(memoizedCount + 1);
  };

  return (
    <Box>
      {!memoizedCount ? (
        <Button __css={styles.button} onClick={handleCounterAction}>
          {title}
        </Button>
      ) : (
        <Flex alignItems={'center'} width={'100%'}>
          <Box __css={styles.countDisplay}>{memoizedCount}</Box>
          <Box __css={styles.counterButtonContainer} mr={'1rem'}>
            <Button __css={styles.counterButton} onClick={handleCounterAction}>
              <MinusIcon width={'1.5rem'} height={'1.5rem'} color={'inherit'} />
            </Button>
          </Box>
          <Box __css={styles.counterButtonContainer}>
            <Button __css={styles.counterButton} onClick={handleCounterAction}>
              <AddIcon width={'1.5rem'} height={'1.5rem'} color={'inherit'} />
            </Button>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default withChakraThemeProvider(CounterButton);
