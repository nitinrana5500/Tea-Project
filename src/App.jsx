import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Rituals from './pages/rituals';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pages/rituals" element={<Rituals />} />
      </Routes>

      <Footer/> 
    </>
  )
}

export default App
