import { extendTheme } from '@chakra-ui/react';
import FormButtonTheme from 'src/global/component-themes/FormButtonTheme';
import FormInputTheme from 'src/global/component-themes/FormInputTheme';
import LoginCardTheme from 'src/global/component-themes/LoginCardTheme';
import NavProfileMenuTheme from 'src/global/component-themes/NavProfileMenuTheme';
import ProductCardTheme from 'src/global/component-themes/ProductCardTheme';

const theme = extendTheme({
  fonts: {
    main: `'Rubik', sans-serif`,
    cinzel: `'Cinzel', serif`,
  },
  components: {
    FormButtonTheme,
    FormInputTheme,
    LoginCardTheme,
    Menu: NavProfileMenuTheme,
    NavProfileMenuTheme,
    ProductCardTheme,
  },
});

export default theme;
