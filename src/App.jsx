import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Navbar } from "./components/Navbar";
import {Home} from "./components/pages/Home";
import {About} from "./components/pages/About";
import { Services } from "./components/pages/Services";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
