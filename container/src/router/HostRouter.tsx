import { Suspense, lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import HomePage from 'src/pages/HomePage';

const RemoteOneApp = lazy(() => import('remoteOne/RemoteApp'));
const RemoteTwoApp = lazy(() => import('remoteTwo/RemoteApp2'));

const HostRouter = () => {
  return (
    <Suspense fallback={'loading...'}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="/auth/*" element={<RemoteOneApp />} />
          <Route path="/remote-two/*" element={<RemoteTwoApp />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default HostRouter;
