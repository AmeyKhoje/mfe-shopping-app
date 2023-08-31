import { Toast, UseToastOptions } from '@chakra-ui/react';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

const CustomToast = ({
  description,
  duration,
  position,
  colorScheme,
  styleConfig,
  variant,
  status,
  ...rest
}: UseToastOptions) => {
  return <Toast />;
};

export default withChakraThemeProvider(CustomToast);
