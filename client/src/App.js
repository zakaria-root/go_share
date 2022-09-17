import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import Login from "./components/Login"

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
