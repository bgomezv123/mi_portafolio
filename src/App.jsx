import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Navbar } from "./components/Navbar";
import { AppRouter } from "./components/router/AppRouter";

function App() {
  return (
    <div className="App"> 

        <Navbar/>
            <AppRouter></AppRouter>
        <footer>
          <p>Brian Joseph Gomez Velasco - Todos los derechos reservados &copy; 2024</p>
        </footer>
    </div>
  )
}

export default App
