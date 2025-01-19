import { useState } from 'react'
<<<<<<< HEAD
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./Index.jsx";

=======
>>>>>>> 231ca66 (Fixed css import)
import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App