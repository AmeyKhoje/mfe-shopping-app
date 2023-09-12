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
    console.log('val', value);
  });

  const handleToggle = () => toggle();

  console.log(ref);

  useEffect(() => {
    console.log(ref);

    document.addEventListener('mousedown', (event) => {});

    return () => document.removeEventListener('mousedown', () => {});
  }, [ref]);

  return (
    <Box __css={styles.main} ref={ref}>
      <Box __css={styles.labelContainer} onClick={handleToggle}>
        <CustomSelectLabel />
      </Box>
      {isOpen && (
        <Box>
          <CustomSelectList />
        </Box>
      )}
    </Box>
  );
};

export default withChakraThemeProvider(CustomSelectInner);
