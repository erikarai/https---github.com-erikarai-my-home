import './Component/Navbar.css'
import './App.css';

import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import MainBody from './Component/MainBody'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Reasons from './Component/Reasons'
import Rules from './Component/Rules';
import ScrollToTopButton from './Component/ScrollToTopButton';


function App() {
  return (<>
  <BrowserRouter>
  <Navbar/>
  <Reasons />
  <Routes>
  <Route path="/Rules" element={<Rules />} />
</Routes>
  </BrowserRouter>
  <ScrollToTopButton />
  </>
  );
}


export default App;
