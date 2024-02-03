import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Home from './Home';
import MyProjects from './MyProjects';
import PriceBreakdown from './PriceBreakdown';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Sidebar />
      </header>
      <div className="App-body">
        <h1>This is the material</h1>
        <div className="redBox">
          {/* Content specific to each page goes here */}
          <h2>Page Title</h2>
          <Routes>
            <Route path="/Home" element={<Home/>} />
            <Route path="/MyProjects" element={<MyProjects/>} />
            <Route path="/PriceBreakdown" element={<PriceBreakdown/>} />
            <Route path="/Profile" element={<Profile/>} />
          </Routes>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
