import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <BookProvider>
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
          <Navbar />
          <main className="container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </BookProvider>
    </Router>
  );
}

export default App;
