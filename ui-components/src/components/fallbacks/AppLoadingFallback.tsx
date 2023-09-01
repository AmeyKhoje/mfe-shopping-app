import { Box, Center, Flex, Spinner } from '@chakra-ui/react';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import Typography from '../ui-elements/common/Typography';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';

const AppLoadingFallback = ({ appName }: { appName: string }) => {
  return (
    <Box
      position={'fixed'}
      top={0}
      left={0}
      width={'100%'}
      height={'100%'}
      userSelect={'none'}
    >
      <Center height={'100%'}>
        <Flex alignItems={'center'}>
          <Typography size={3} bold={5} color={COLOR_PALETTE.SECONDARY}>
            Loading {appName || 'App'} Application
          </Typography>
          <Box marginLeft={'2rem'} marginRight={'2rem'}>
            <Spinner
              width={'4rem'}
              height={'4rem'}
              thickness="0.5rem"
              color={COLOR_PALETTE.LIGHT_BLUE}
              emptyColor={COLOR_PALETTE.ACCENT}
            />
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default withChakraThemeProvider(AppLoadingFallback);
