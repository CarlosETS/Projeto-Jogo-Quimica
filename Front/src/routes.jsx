import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
//Routes
import Home from './pages/home.jsx'
import Ranking from './pages/ranking.jsx';
import AddQuestions from './pages/admins/addQuestions.jsx';
import Dissociation from './pages/dissociation.jsx';
import Login from './pages/Login.jsx';

import QuizNox from './pages/quiznox.jsx';

// const Componente = lazy(() => import('./pages/Auth/Login'))

export default function AppRoutes() {

  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dissociation" element={<Dissociation />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/addquestions" element={<AddQuestions />} />
            <Route path='/quiznox' element={<QuizNox/>}/>
          </Routes>
        </Router>
      </Suspense >
    </>
  );
}
