import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Transactions from './pages/Transactions';

import Aos from "aos";
import "aos/dist/aos.css";
import Profile from './pages/Profile';

function App() {
  Aos.init();

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/user" element={<Profile />} />

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
