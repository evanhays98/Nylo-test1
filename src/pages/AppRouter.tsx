import { Routes, Route } from 'react-router-dom';
import React from 'react';

import { FirstPage } from 'src/pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
    </Routes>
  );
};