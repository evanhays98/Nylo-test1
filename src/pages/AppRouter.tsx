import { Routes, Route } from 'react-router-dom';
import React from 'react';

import { FirstPage, NewPage } from 'src/pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/newpage" element={<NewPage />} />
    </Routes>
  );
};