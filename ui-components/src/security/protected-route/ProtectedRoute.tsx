import { ReactElement } from 'react';
import {
  navigateToRemote,
  getFromLocalStorage,
} from 'utilityFunctions/helpers';
import { LocalStorageKeys } from 'utilityFunctions/constants';

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const isLoggedIn = getFromLocalStorage(LocalStorageKeys.IS_LOGGED_IN);
  if (!isLoggedIn) {
    navigateToRemote('/auth');
    return;
  }
  return children;
};

export default ProtectedRoute;
