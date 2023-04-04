import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  
  return (
    <>
      <Navbar title="TextUtils" AboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container w-75">
      {/* <TextForm heading="Enter the text to analyze below" mode={mode}/> */}
      {/* <About /> */}
      <Router>
          <Routes>
            <Route path='/' element={<TextForm mode={mode} heading="Enter the text to analyze below" />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
