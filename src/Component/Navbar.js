
import logo from './LogoHackathon.png'
import  React, { useState , useEffect } from 'react'

function Navbar() {
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
  return (
    <>
    <nav className="navbar bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand">Incedo</a>
    <form className="d-flex" role="search">
      <button type="button" className="btn btn-light mx-2">Log in</button>
      {/* <button type="button" class="btn btn-light">Sign up</button> */}
      <div className="dropdown">
  <button className="btn btn-light dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sign up
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Jugde</a></li>
    <li><a className="dropdown-item" href="#">Panelist</a></li>
    <li><a className="dropdown-item" href="#">Participant</a></li>
    <li><a className="dropdown-item" href="#">Team Member</a></li>
  </ul>
</div>
    </form>
  </div>
</nav>
<img src={logo} alt="Logo" />
<ul className="list-group list-group-flush">
  <li className="list-group-item " align="left"><div class="participated-calendar-div less-margin-3 dark"><span class="event-team-size small medium-margin-left caps">
                    Allowed team size:
<strong>

                        1 - 4

</strong>
</span></div></li>
  {/* <li className="list-group-item fw-light fs-6" align="left">STARTS ON:
  <div>
            <p> Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>

    </div>
  </li>
  
  <li className="list-group-item">A third item</li>
  <li className="list-group-item"></li>
   */}
   <div class="col-sm-9">
   <div class="card">
  <div class="card-body">
     <div className="container text-center fw-light border-white">
  <div className="row ">
    <div className="col">
    STARTS ON:
    </div>
    <div className="col">
    IDEATION:
    </div>
    <div className="col">
      ENDS ON:
    </div>
  </div>
</div>
<div className="container text-center">
  <div className="row">
    <div className="col">
      Sep 29, 2023, 12:40 PM IST
    </div>
    <div className="col">
      Online
    </div>
    <div className="col">
    Oct 16, 2023, 11:55 PM IST
    </div>
  </div>
</div>
  </div>
</div>
</div>
<div class="col-sm-9">
   <div class="card">
  <div class="card-body">
     <div className="container text-center fw-light ">
  <div className="row">
    <div className="col">
    STARTS ON:
    </div>
    <div className="col">
    DEVELOPMENT:
    </div>
    <div className="col">
      ENDS ON:
    </div>
  </div>
</div>
<div className="container text-center">
  <div className="row">
    <div className="col">
      Sep 29, 2023, 12:40 PM IST
    </div>
    <div className="col">
      Online
    </div>
    <div className="col">
    Oct 16, 2023, 11:55 PM IST
    </div>
  </div>
</div>
  </div>
</div>
</div>
</ul>

<button type="button" class="btn btn-primary" >Register Now</button>


    </>
  )
}

export default Navbar
