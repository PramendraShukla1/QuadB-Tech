import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookShow from './components/BookShow'

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/book-show' element={<BookShow/>}/>
   </Routes>
   </BrowserRouter>

   </>
  )
}

export default App