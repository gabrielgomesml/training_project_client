import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login } from '../pages';

const PagesRoutes: React.FC = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Login />} />
  </Routes>
);

export default PagesRoutes;
