import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

import "./NewApp";


// import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <div>
      <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Project" element={<Project />} /> */}
          {/* <Route path="/HireMe" element={<HireMe />} /> */}
          


        </Routes>
      </Router>
    </div>
    </div>
  )
}

export default App
