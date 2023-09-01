import React, {
  ComponentType,
  ExoticComponent,
  LazyExoticComponent,
  Suspense,
  lazy,
  useEffect,
  useState,
} from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { useTypedSelector } from 'src/store';
import { getFromLocalStorage } from 'utilityFunctions/helpers';
import { LocalStorageKeys } from 'utilityFunctions/constants';
import { AppLoadingFallback } from 'uiComponents/components';

const RemoteOneApp = lazy(() => import('auth/AuthApp'));
const RemoteTwoApp = lazy(() => import('shop/ShopApp'));

const HostRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const state: any = useTypedSelector((state) => state);

  useEffect(() => {
    const isLoggedIn = getFromLocalStorage(LocalStorageKeys.IS_LOGGED_IN);
    console.log(isLoggedIn);

    setIsLoggedIn(!!isLoggedIn);
  }, []);

  return (
    // <Suspense fallback={<AppLoadingFallback appName={'Login'} />}>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route
          path="/"
          element={<Navigate to={!!isLoggedIn ? '/shop' : '/auth'} />}
        />

        {!isLoggedIn && (
          <Route
            path="/auth/*"
            element={
              <Suspense
                fallback={<AppLoadingFallback appName={'Login/Register'} />}
              >
                <RemoteOneApp />
              </Suspense>
            }
          />
        )}
        {isLoggedIn && (
          <Route
            path="/shop/*"
            element={
              <Suspense fallback={<AppLoadingFallback appName={'Shop'} />}>
                <RemoteTwoApp />
              </Suspense>
            }
          />
        )}
      </Route>
    </Routes>
    // </Suspense>
  );
};

export default HostRouter;
