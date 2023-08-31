import { Toaster } from 'react-hot-toast';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/600.css';
import '@fontsource/rubik/400.css';
import '@fontsource/cinzel/400.css';
import '@fontsource/cinzel/500.css';
import '@fontsource/cinzel/600.css';
import '@fontsource/cinzel/700.css';
import '@fontsource/cinzel/800.css';
import '@fontsource/cinzel/900.css';

const UtilityHOC = (Component: any) => {
  const NewComponent = (props: any) => {
    return (
      <>
        <Toaster />
        <Component {...props} />
      </>
    );
  };

  return NewComponent;
};

export default UtilityHOC;
