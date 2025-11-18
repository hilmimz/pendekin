import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/main/dashboard/DashboardPage';
import LinksPage from './pages/main/links/LinksPage';
import AnalyticsPage from './pages/main/analytics/AnalyticsPage';
import ProtectedRoute from './routes/ProtectedRoute';
import { GuestRoute } from './routes/GuestRoute';

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute/>}>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/links" element={<LinksPage/>}/>
        <Route path="/analytics" element={<AnalyticsPage/>}/>
      </Route>
      <Route element={<GuestRoute/>}>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
