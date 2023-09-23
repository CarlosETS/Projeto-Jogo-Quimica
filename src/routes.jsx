import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CircularProgress  } from '@mui/material';
//Routes
import Home from './pages/home.jsx'
import Workbench from './pages/workbench.jsx'
// const Componente = lazy(() => import('./pages/Auth/Login'))

export default function AppRoutes() {

  return (
    <Suspense fallback={<CircularProgress  />}>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/workbench" element={<Workbench />} />
        </Routes>
      </Router>
    </Suspense>
  );
}
