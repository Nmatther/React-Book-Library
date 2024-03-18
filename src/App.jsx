import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import { Home, UserReg, Login, Account, Book } from './pages'
import './App.css'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  console.log(token)
  return (
    <div>
      <NavBar token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<Book token={token} />} />
        <Route path="/Createuser" element={<UserReg />} />
        <Route path="/login" element={<Login token={token} setToken={setToken} />} />
        <Route path="/account" element={<Account token={token} />} />
      </Routes>
    </div>
  )
}

export default App
