import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import HomePage from 'src/pages/HomePage';
import { Events } from 'utilityFunctions/constants';
import toast from 'react-hot-toast';

const RemoteOneApp = lazy(() => import('auth/AuthApp'));
const RemoteTwoApp = lazy(() => import('shop/ShopApp'));

const HostRouter = () => {
  // useEffect(() => {
  //   window.addEventListener(
  //     Events.USER_CREATE.SUCCESS,
  //     function handler(event: CustomEvent) {
  //       event.stopImmediatePropagation();
  //       toast('Hello', {
  //         duration: 5000,
  //         position: 'top-center',
  //       });
  //     }
  //   );

  //   return () =>
  //     window.removeEventListener(Events.USER_CREATE.SUCCESS, () => {});
  // }, []);

  return (
    <Suspense fallback={'loading...'}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="/auth/*" element={<RemoteOneApp />} />
          <Route path="/shop/*" element={<RemoteTwoApp />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default HostRouter;
