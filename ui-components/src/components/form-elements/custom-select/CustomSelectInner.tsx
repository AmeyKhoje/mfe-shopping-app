import { Box, useMultiStyleConfig } from '@chakra-ui/react';
import CustomSelectLabel from './CustomSelectLabel';
import CustomSelectList from './CustomSelectList';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import { useContext, useEffect, useRef } from 'react';
import CustomSelectContext from 'src/contexts/CustomSelectContext';
import { useOutsideClick } from 'utilityFunctions/hooks';

const CustomSelectInner = () => {
  const ref = useRef(null);
  const styles = useMultiStyleConfig('CustomSelectTheme');
  const { isOpen, toggle } = useContext(CustomSelectContext);

  useOutsideClick(ref, (value: boolean) => {
    !!value && toggle(false);
  });

  const handleToggle = () => toggle(!isOpen);

  return (
    <Box __css={styles.main} ref={ref}>
      <Box __css={styles.labelContainer} onClick={handleToggle}>
        <CustomSelectLabel />
      </Box>
      {isOpen && (
        <Box __css={styles.popper}>
          <CustomSelectList />
        </Box>
      )}
    </Box>
  );
};

export default withChakraThemeProvider(CustomSelectInner);
