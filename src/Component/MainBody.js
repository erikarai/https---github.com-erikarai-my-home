import React, {useContext} from 'react'
// import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sidebar.css"
import { Link } from 'react-router-dom'


function MainBody() {
  return (
<>
<div id="overview" class="inner-panel">
    <Link to='/main' >
    <h2 class="regular dark weight-600 caps inline-block float-left medium-margin-right">
        Overview
    </h2>
    </Link>
    {/* <div class="section-line"><span></span></div>
    <div class="clear"></div> */}
    <div class="content dark standard-margin-bottom">
        <div class="content"><h3>Welcome to the ultimate innovation challenge of the year, the CyientifIQ Innovation League - Global Hackathon 2023!</h3>
<p>This exhilarating event brings together brilliant minds from various fields to tackle the most pressing issues of our time.</p>
<p>With three captivating themes - <strong>Designing Digital Enterprises, Building Intelligent Products and Platforms, and Solving Sustainability Challenges</strong>—this year's Hackathon promises to be a platform where technology and creativity converge to shape a better future.&nbsp;</p></div>
        
        </div>
    </div>
</>
  )
}

export default MainBody
