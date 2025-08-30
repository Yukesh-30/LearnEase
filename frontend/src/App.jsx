import React from "react"
import Home from "./pages/home/Home"



function App() {
  const darkMode = localStorage.getItem("hero-theme") === "dark"
 return (
    <>
     
      
      <Home />
    </>
  )
}

export default App
