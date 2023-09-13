import { ThemeProvider } from '@chakra-ui/react';
import theme from 'src/chakra-config/ChakraTheme';
import '@fontsource/rubik/500.css';

const withChakraThemeProvider = (StyledComponent: any) => {
  const ComponentWithHOC = (props: any) => (
    <ThemeProvider theme={theme}>
      <StyledComponent {...props} />
    </ThemeProvider>
  );

  return ComponentWithHOC;
};

export default withChakraThemeProvider;
