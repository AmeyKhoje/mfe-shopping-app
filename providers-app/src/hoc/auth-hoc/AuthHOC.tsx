import { useState } from 'react';
import { auth } from '../../firebase/index';

const AuthHOC = (Component: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  auth.onAuthStateChanged((user) => {
    if (user?.uid) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  });

  const InnerComponent = () => {
    return <Component auth={{ isLoggedIn }} />;
  };

  return InnerComponent;
};

export default AuthHOC;
