import './Component/Navbar.css'
import './App.css';

import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import MainBody from './Component/MainBody'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Reasons from './Component/Reasons'
import Footer from './Component/Footer'

function App() {
  return (<>
  <Navbar/>
  <Reasons />
  <Footer />
  </>
  );
}


export default App;
