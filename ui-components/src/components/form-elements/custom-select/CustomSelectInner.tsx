import { Box, useMultiStyleConfig } from '@chakra-ui/react';
import CustomSelectLabel from './CustomSelectLabel';
import CustomSelectList from './CustomSelectList';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import { useContext, useMemo, useRef } from 'react';
import CustomSelectContext from 'src/contexts/CustomSelectContext';
import { useOutsideClick } from 'utilityFunctions/hooks';

const CustomSelectInner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const styles = useMultiStyleConfig('CustomSelectTheme');
  const { isOpen, toggle } = useContext(CustomSelectContext);

  useOutsideClick(ref, (value: boolean) => {
    !!value && toggle(false);
  });

  const handleToggle = () => toggle(!isOpen);

  const position: 'bottom' | 'top' = useMemo(() => {
    if (ref.current) {
      const windowHeight = window.innerHeight;
      const top = ref.current.getBoundingClientRect().top;
      if (windowHeight - top > 230) {
        return 'bottom';
      } else return 'top';
    } else return 'bottom';
  }, [isOpen]);

  return (
    <Box __css={styles.main} ref={ref}>
      <Box __css={styles.labelContainer} onClick={handleToggle}>
        <CustomSelectLabel />
      </Box>
      {isOpen && (
        <Box
          __css={styles.popper}
          top={position === 'bottom' ? '5.5rem' : 'auto'}
          bottom={position === 'top' ? '5.5rem' : 'auto'}
        >
          <CustomSelectList />
        </Box>
      )}
    </Box>
  );
};

export default withChakraThemeProvider(CustomSelectInner);
