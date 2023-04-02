import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Resume from './components/Resume'


function App() {
  return (
    <Router>
        <Header />
        
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/project' element={<Project />}/>
          <Route path='/resume' element={<Resume />}/>
          
        </Routes>
    </Router>
  )
}

export default App