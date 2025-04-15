
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from "./components/sidebar";
import './App.css'

function App() {
  

  return (
    <>
   <Router>
    <div className="flex">
      <Sidebar/>

      <div className="flex-1">
      <Navbar/>
      </div>
    </div>
    
   </Router>
    </>
  )
}

export default App
