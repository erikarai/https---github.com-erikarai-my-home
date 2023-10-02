import './Component/Navbar.css'
import './App.css';

import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import MainBody from './Component/MainBody'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return ( 
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/MainBody" element={<MainBody />} />
      </Routes>
    </BrowserRouter>
    </>

  );
}


export default App;
