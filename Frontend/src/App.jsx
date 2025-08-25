import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Services from "./pages/Services"

function App() {
  return (
    <BrowserRouter>
      <div className="text-[#060b64] dark:text-[#d9d9e3] dark:bg-[#101121] transition-colors duration-300">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
