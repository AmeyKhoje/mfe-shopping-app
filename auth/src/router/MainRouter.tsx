import { Routes, Route } from 'react-router-dom';
import Login from 'src/pages/Login';
import PageOne from 'src/pages/PageOne';

const MainRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/register" element={<div>Hello</div>} />
    </Routes>
  );
};

export default MainRouter;
