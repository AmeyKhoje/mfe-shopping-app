import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Flex, useMultiStyleConfig } from '@chakra-ui/react';
import Typography from 'src/components/ui-elements/common/Typography';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

const CustomSelectLabel = () => {
  const styles = useMultiStyleConfig('CustomSelectTheme');
  return (
    <Box __css={styles.label}>
      <Box>
        <Typography size={1.6}>Select Here</Typography>
      </Box>
      <Box>
        <ChevronDownIcon width={'3rem'} height={'3rem'} />
      </Box>
    </Box>
  );
};

export default withChakraThemeProvider(CustomSelectLabel);
