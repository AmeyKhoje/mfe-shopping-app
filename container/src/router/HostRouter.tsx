import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { useTypedSelector } from 'src/store';
import { getFromLocalStorage } from 'utilityFunctions/helpers';
import { LocalStorageKeys } from 'utilityFunctions/constants';

const RemoteOneApp = lazy(() => import('auth/AuthApp'));
const RemoteTwoApp = lazy(() => import('shop/ShopApp'));

const HostRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const state: any = useTypedSelector((state) => state);

  useEffect(() => {
    const isLoggedIn = getFromLocalStorage(LocalStorageKeys.IS_LOGGED_IN);
    setIsLoggedIn(!!isLoggedIn);
  }, []);

  return (
    <Suspense fallback={'loading...'}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            path="/"
            element={
              <Navigate
                to={!!state?.auth?.isLoggedIn || isLoggedIn ? '/shop' : '/auth'}
              />
            }
          />
          {(!state?.auth?.isLoggedIn || isLoggedIn) && (
            <Route path="/auth/*" element={<RemoteOneApp />} />
          )}
          {(state?.auth?.isLoggedIn || isLoggedIn) && (
            <Route path="/shop/*" element={<RemoteTwoApp />} />
          )}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default HostRouter;
