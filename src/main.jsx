import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Drapery from './pages/Drapery'
import Services from './pages/Services'
import Slipcovers from './pages/Slipcovers'
import Upholstery from './pages/Upholstery'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/drapery" element={<Drapery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/slipcovers" element={<Slipcovers />} />
        <Route path="/upholstery" element={<Upholstery />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
