import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Services from './Pages/Services'
import About from './Pages/About'
import Books from './Pages/Books'
import Home from './Compoents/Home'
import WheatherApp from './Pages/WheatherApp'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/wheatherapp" element={<WheatherApp />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/edit/:id" element={<Home />} />
        <Route path="/books/add" element={<Home />} />
      </Routes>
    
    </>
  )
}

export default App
