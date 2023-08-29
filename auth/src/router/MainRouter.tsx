import { Routes, Route } from 'react-router-dom';
import Login from 'src/pages/Login';
import Register from 'src/pages/Register';

const MainRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRouter;
