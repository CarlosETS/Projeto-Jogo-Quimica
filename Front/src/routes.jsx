import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
//Routes
import Home from './pages/home.jsx'
import Ranking from './pages/ranking.jsx';
import AddQuestions from './pages/addquestion.jsx';
import Dissociation from './pages/dissociation.jsx';

// const Componente = lazy(() => import('./pages/Auth/Login'))

export default function AppRoutes() {

  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dissociation" element={<Dissociation />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/addquestions" element={<AddQuestions />} />
          </Routes>
        </Router>
      </Suspense >
    </>
  );
}
