import './Component/Navbar.css'
import './App.css';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import MainBody from './Component/MainBody'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
  
    <div className="App">
      <Navbar />
      <Sidebar />
      <BrowserRouter>
  <Routes>
    <Route path="/main" element={<MainBody />}></Route>
  </Routes>
  </BrowserRouter>
    </div>
    
    
  );
}

export default App;
