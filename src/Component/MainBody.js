import React from 'react'
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sidebar.css"


function MainBody() {
  return (
    <>
    <div className='grid grid-cols-[1fr_3fr]'>
    <div className="bg-light border-right" id="sidebar">
      <div className="sidebar-heading">Sidebar</div>
      <Nav className="flex-column">
        <Nav.Link href="#">Link 1</Nav.Link>
        <Nav.Link href="#">Link 2</Nav.Link>
        <Nav.Link href="#">Link 3</Nav.Link>
      </Nav>
    </div>
      
    </div>
    </>
  )
}

export default MainBody
