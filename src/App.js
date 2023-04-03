import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
        <Header />
        <Footer />
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/project' element={<Project />}/>
          <Route path='/resume' element={<Resume />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
    </Router>
  )
}

export default App