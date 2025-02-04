import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AskAI } from './components/AskAI'
import { ResponseAI } from './views/ResponseAI'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AskAI />
      <Routes>
        <Route path={"/:question"} element={<ResponseAI />} />
      </Routes>
    </>
  )
}

export default App
