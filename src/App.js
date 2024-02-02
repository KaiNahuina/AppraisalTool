import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Sidebar />
        </Router>
      </header>
      <div className="App-body">
        <h1>This is the material</h1>
        <div className="redBox">
          {/* Content specific to each page goes here */}
          <h2>Page Title</h2>
          <p>This is the content of the page within the red box.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
