import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./Index.jsx";

import './css/App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;