import { Navigate, Route, Routes } from 'react-router-dom';

import PublicRoute from '../shared/components/PublicRoute';
import PrivateRoute from '../shared/components/PrivateRoute';

import Navbar from './Navbar';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ContactsPage from '../pages/ContactsPage';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
