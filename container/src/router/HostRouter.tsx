import { Suspense, lazy } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import HomePage from 'src/pages/HomePage';
import { useTypedSelector } from 'src/store';

const RemoteOneApp = lazy(() => import('auth/AuthApp'));
const RemoteTwoApp = lazy(() => import('shop/ShopApp'));

const HostRouter = () => {
  const state: any = useTypedSelector((state) => state);

  return (
    <Suspense fallback={'loading...'}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            index
            element={
              <Navigate to={!!state?.auth?.isLoggedIn ? '/shop' : '/auth'} />
            }
          />
          {!state?.auth?.isLoggedIn && (
            <Route path="/auth/*" element={<RemoteOneApp />} />
          )}
          {state?.auth?.isLoggedIn && (
            <Route path="/shop/*" element={<RemoteTwoApp />} />
          )}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default HostRouter;
