import React from "react"
import Home from "./pages/home/Home"
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"



function App() {
  const darkMode = localStorage.getItem("hero-theme") === "dark"
 return (
    <>
      <Login/>
      {/* <Home/> */}
      {/* <Signup/> */}
    </>
  )
}

export default App
