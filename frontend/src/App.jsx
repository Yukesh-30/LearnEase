import React from "react"
import Home from "./pages/home/Home"
import Login from "./pages/Auth/Login"



function App() {
  const darkMode = localStorage.getItem("hero-theme") === "dark"
 return (
    <>
      <Login/>
      {/* <Home/> */}
    </>
  )
}

export default App
