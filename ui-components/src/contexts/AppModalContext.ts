import { createContext } from 'react';

type AppModalContextType = {
  isOpen: boolean;
  handleVisibility: Function;
};

const appModalContext = createContext<AppModalContextType>({
  handleVisibility: () => {},
  isOpen: false,
});

export default appModalContext;
