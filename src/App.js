import './Component/Navbar.css'
import './App.css';

import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import MainBody from './Component/MainBody'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Reasons from './Component/Reasons'
import Footer from './Component/Footer'
import Login from './Component/Login'
import Group from './Component/Group';
import Signup from './Component/Signup'

function App() {
  return (<>
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<Group />} />
    < Route element={<Login/>} path='/login'/>
    <Route path="/over" element={<Sidebar />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
  </Routes>
  </BrowserRouter>
 
  {/* <Login /> */}
  </>
  );
}


export default App;
