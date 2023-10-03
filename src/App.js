import './Component/Navbar.css'
import './App.css';

import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import MainBody from './Component/MainBody'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Reasons from './Component/Reasons'
import Footer from './Component/Footer'
import Login from './Component/Login';
import Signup from './Component/Signup';
import Group from './Component/Group';

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
  </>
  );
}


export default App;
