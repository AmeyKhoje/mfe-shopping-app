import { Routes, Route } from 'react-router-dom';
import Login from 'src/pages/Login';
import Register from 'src/pages/Register';
import {
  navigateToRemote,
  getFromLocalStorage,
} from 'utilityFunctions/helpers';
import { LocalStorageKeys } from 'utilityFunctions/constants';

const MainRouter = () => {
  const isLoggedIn = getFromLocalStorage(LocalStorageKeys.IS_LOGGED_IN);
  if (!!isLoggedIn) {
    navigateToRemote('/shop');
    return;
  }
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRouter;
