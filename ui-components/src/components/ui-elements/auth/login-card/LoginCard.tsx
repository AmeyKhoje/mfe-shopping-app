import { Box, useStyleConfig } from '@chakra-ui/react';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import { LoginCardTypes } from 'src/types/Cards';

const LoginCard = ({ FormComponent }: LoginCardTypes) => {
  const styles = useStyleConfig('LoginCardTheme');
  return <Box __css={styles}>{FormComponent}</Box>;
};

export default withChakraThemeProvider(LoginCard);
