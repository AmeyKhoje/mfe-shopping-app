import { Toast, UseToastOptions } from '@chakra-ui/react';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

const CustomToast = ({ ...rest }: UseToastOptions) => {
  return <Toast {...rest} />;
};

export default withChakraThemeProvider(CustomToast);
