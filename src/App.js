import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Home from './Home';
import MyProjects from './MyProjects';
import Profile from './Profile';
import LoginPage from './Login';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCalculate = () => {
    setIsExpanded(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <Router>
        {isLoggedIn && (
          <header className="App-header">
            <Sidebar />
          </header>
        )}
        <div className="App-body">
          <div className={`redBox ${isExpanded ? 'expanded' : 'minimized'}`}>
            <Routes>
              <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
              <Route path="/home" element={isLoggedIn ? <Home handleCalculate={handleCalculate} /> : <Navigate to="/login" />} />
              <Route path="/myprojects" element={isLoggedIn ? <MyProjects /> : <Navigate to="/login" />} />
              <Route path="/profile" element={isLoggedIn ? <Profile onLogout={handleLogout} /> : <Navigate to="/login" />} />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
