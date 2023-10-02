import './Component/Navbar.css'
import './App.css';

import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import MainBody from './Component/MainBody'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (<>
  <Navbar/>
  <BrowserRouter>
  <Routes>
    <Route path='/Home' element={<Navbar/>}></Route>

  </Routes>
  </BrowserRouter>
  </>
  );
}


export default App;
