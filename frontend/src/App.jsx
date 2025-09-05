import React from "react"
import Home from "./pages/home/Home"
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"
import Features from "./pages/home/Features"
import Community from "./pages/home/Community"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"



function App() {
  
  //const darkMode = localStorage.getItem("hero-theme") === "dark"
 return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/features" element={<Features />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
