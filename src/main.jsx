import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import PortfolioPage from './pages/portfolioPage'
import ContactPage from './pages/contactPage'
import Screen from './App'
import SubmitPage from './pages/submitPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Screen/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/portfolio' element={<PortfolioPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/submit' element={<SubmitPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
