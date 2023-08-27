import { extendTheme } from '@chakra-ui/react';
import FormButtonTheme from 'src/global/component-themes/FormButtonTheme';
import FormInputTheme from 'src/global/component-themes/FormInputTheme';
import LoginCardTheme from 'src/global/component-themes/LoginCardTheme';

const theme = extendTheme({
  fonts: {
    main: `'Rubik', sans-serif`,
  },
  components: {
    FormButtonTheme,
    FormInputTheme,
    LoginCardTheme,
  },
});

export default theme;
