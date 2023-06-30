import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
import Running from './components/Running';
import './styles.css'; // Import the styles.css file

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Running" element={<Running/>} />
          <Route path="/Rung" element={<Running/>} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
