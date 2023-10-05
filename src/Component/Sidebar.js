import React, {useContext} from 'react'
import { Link, Outlet } from 'react-router-dom'
import MainBody from './MainBody'
import Rules from './Rules'
import Rightside from './Rightside'
import ScrollToTopButton from './ScrollToTopButton'

function Sidebar() {

  return (
     <div className='d-flex '>
    <div className="p-2 style={{ flex : 1.5}}">
    <div className="row flex-nowrap bg-dark">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                {/* <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a> */}
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li>
                        <a href="/" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline text-white"><b>About</b></span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline" justifyContent='center' alignItems= 'center'><Link to='/over' className='view text-white'>Overview </Link></span></a>
                            </li>
                            <li>
                            <a href='#' className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-table"></i>
                                <span className="ms-1 d-none d-sm-inline text-white"><Link to='/prize' className='pri text-white'>Prizes</Link></span>
                            </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/Rules' className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-white"><b>Rules</b></span></Link>
                    </li>
                    {/* <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-white"><b>Judges</b></span></a>
                    </li> */}
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline text-white" style={{ whiteSpace: 'nowrap' }}><b>Submission Guideline</b></span></a>
    
                    </li>
                
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline text-white" style={{ whiteSpace: 'nowrap' }}><b>About Incedo</b></span> </a>
                    </li>
                </ul>
                <hr/>
                
            </div>
        </div>
        </div>
</div>
            <div className='p-21' style={{flex : 2}}>
             <MainBody /> 
           </div>
           <div className='p-2' style={{flex : 0.5}}>
            <ScrollToTopButton/>
           </div>
           {/* <Outlet /> */}
</div>
  )
}

export default Sidebar
