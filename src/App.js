import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import About from './components/About'


function App() {
  return (
    <Router>
        <Header />
        
        <Routes>
          <Route path='/' element={<About />}/>
        </Routes>
    </Router>
  )
}

export default App