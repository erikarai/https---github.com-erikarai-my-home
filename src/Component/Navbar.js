import React from 'react'
import logo from './LogoHackathon.png'

function Navbar() {
  return (
    <>
    <nav className="navbar bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand">Incedo</a>
    <form className="d-flex" role="search">
      {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
      {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      <button type="button" className="btn btn-light mx-2">Log in</button>
      {/* <button type="button" class="btn btn-light">Sign up</button> */}
      <div class="dropdown">
  <button class="btn btn-light dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sign up
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Jugde</a></li>
    <li><a class="dropdown-item" href="#">Panelist</a></li>
    <li><a class="dropdown-item" href="#">Participant</a></li>
    <li><a class="dropdown-item" href="#">Team Member</a></li>
  </ul>
</div>
    </form>
  </div>
</nav>
<img src={logo} alt="Logo" />
    </>
  )
}

export default Navbar
