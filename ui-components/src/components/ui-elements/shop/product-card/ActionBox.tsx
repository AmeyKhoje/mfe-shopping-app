import { Box } from '@chakra-ui/react';
import CounterButton from '../../common/CounterButton';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import { useContext } from 'react';
import productCardContext from 'src/contexts/ProductCardContext';

const ActionBox = () => {
  const { count, actionHandler, id } = useContext(productCardContext);

  const handleAction = (latestCount: number) => {
    console.log(latestCount);

    actionHandler(id, latestCount);
  };

  return (
    <Box pt={'1.8rem'}>
      <CounterButton
        title={'Buy now'}
        count={count}
        handleAction={handleAction}
      />
    </Box>
  );
};

export default withChakraThemeProvider(ActionBox);
