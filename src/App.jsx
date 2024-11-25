import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Services from './Pages/Services'
import About from './Pages/About'
import Contactus from './Pages/Contactus'
import Books from './Pages/Books'
import Home from './Compoents/Home'
import { ToastContainer } from 'react-toastify'
import BookList from './Compoents/BookList'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/edit/:id" element={<Home />} />
        <Route path="/books/add" element={<Home />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
