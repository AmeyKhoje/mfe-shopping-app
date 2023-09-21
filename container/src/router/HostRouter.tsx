import { Suspense, lazy } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { AppLoadingFallback } from 'uiComponents/components';
import { ProtectedRoute } from 'uiComponents/security';

const RemoteOneApp = lazy(() => import('auth/AuthApp'));
const RemoteTwoApp = lazy(() => import('shop/ShopApp'));
const CartApp = lazy(() => import('cart/CartApp'));

const HostRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="/" element={<Navigate to={'/auth'} />} />

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

        <Route
          path="/shop/*"
          element={
            <ProtectedRoute>
              <Suspense fallback={<AppLoadingFallback appName={'Shop'} />}>
                <RemoteTwoApp />
              </Suspense>
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart/*"
          element={
            <ProtectedRoute>
              <Suspense fallback={<AppLoadingFallback appName={'Cart'} />}>
                <CartApp />
              </Suspense>
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default HostRouter;
