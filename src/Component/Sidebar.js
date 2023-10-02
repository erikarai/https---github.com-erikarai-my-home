import React, {useContext} from 'react'
import { Link, Outlet } from 'react-router-dom'

function Sidebar() {
  return (
     <div className='d-flex'>
    <div className="p-2 style={{ flex : 1.5}}">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                {/* <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a> */}
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline"><b>About</b></span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/main" className="nav-link px-0"> <span className="d-none d-sm-inline" justifyContent='center' alignItems= 'center'>Overview</span></Link>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Prizes</span></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline"><b>Rules</b></span></a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline"><b>Judges</b></span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline" style={{ whiteSpace: 'nowrap' }}><b>Submission Guideline</b></span></a>
    
                    </li>
                
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline" style={{ whiteSpace: 'nowrap' }}><b>About Incedo</b></span> </a>
                    </li>
                </ul>
                <hr/>
                
            </div>
        </div>
        </div>
</div>
            <div className='p-2' style={{flex : 3}}>
             content area
           </div>
           <div className='p-2' style={{flex : 0.5}}>
             hello erika
           </div>
           <Outlet />
</div>
  )
}

export default Sidebar
