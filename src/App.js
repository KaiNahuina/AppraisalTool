import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Home from './Home';
import MyProjects from './MyProjects';
import Profile from './Profile';

function App() {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleCalculate = () => {
    setIsExpanded(true);
  };


  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Sidebar />
      </header>
      <div className="App-body">
        <div className={`redBox ${isExpanded ? 'expanded' : 'minimized'}`}>
          {/* Content specific to each page goes here */}
          
          <Routes>
            <Route path="/Home" element={<Home handleCalculate={handleCalculate} />} />
            <Route path="/MyProjects" element={<MyProjects/>} />
            <Route path="/Profile" element={<Profile/>} />
          </Routes>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
