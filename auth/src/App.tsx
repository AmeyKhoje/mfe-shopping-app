import 'assets/styles/style.scss';
import MainRouter from './router/MainRouter';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'uiComponents/ChakraTheme';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/600.css';
import '@fontsource/rubik/400.css';

const App = () => {
  console.log(theme);

  return (
    <div>
      <MainRouter />
      {/* <ChakraProvider theme={theme}>
        
      </ChakraProvider> */}
    </div>
  );
};

export default App;
