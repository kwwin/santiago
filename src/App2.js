import React from 'react'
import {Routes, Route} from 'react-router-dom'

// components

import Home from "./Home";
import Book from "./Book";
import Events from "./Events";
import Landingpage from "./Digiposter";
import HomeLayout from './layout/HomeLayout';
// img


const App2 = () => {
  return (
    <>
        <Routes>
                <Route index element={<Home />} />
                <Route path="digiposter" element={<Landingpage />} />
                <Route path="book" element={<Book />} />
                <Route path="events" element={<Events />} />
       </Routes>
    </>
  )
}

export default App2