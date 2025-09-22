import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import './App.css'

// Componentes
import Header from './components/Header'
import Home from './components/Home'
import Authors from './components/Authors'
import Works from './components/Works'
import Quiz from './components/Quiz'
import Timeline from './components/Timeline'
import Context from './components/Context'
import Origins from './components/Origins'
import Characteristics from './components/Characteristics'
import GlobalFigures from './components/GlobalFigures'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contexto" element={<Context />} />
            <Route path="/origens" element={<Origins />} />
            <Route path="/caracteristicas" element={<Characteristics />} />
            <Route path="/figuras-globais" element={<GlobalFigures />} />
            <Route path="/autores" element={<Authors />} />
            <Route path="/obras" element={<Works />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

