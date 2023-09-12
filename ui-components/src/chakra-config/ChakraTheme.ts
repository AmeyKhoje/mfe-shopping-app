import { extendTheme } from '@chakra-ui/react';
import FormButtonTheme from 'src/global/component-themes/FormButtonTheme';
import FormInputTheme from 'src/global/component-themes/FormInputTheme';
import LoginCardTheme from 'src/global/component-themes/LoginCardTheme';
import NavProfileMenuTheme from 'src/global/component-themes/NavProfileMenuTheme';
import ProductCardTheme from 'src/global/component-themes/ProductCardTheme';
import CounterCardTheme from 'src/global/component-themes/CounterCardTheme';
import AppModalTheme from 'src/global/component-themes/AppModalTheme';
import FilePickerTheme from 'src/global/component-themes/FilePickerTheme';
import CustomSelectTheme from 'src/global/component-themes/CustomSelectTheme';

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
    CounterCardTheme,
    AppModalTheme,
    FilePickerTheme,
    CustomSelectTheme,
  },
});

export default theme;
