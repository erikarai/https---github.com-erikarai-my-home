import React, {useContext} from 'react'
// import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sidebar.css"
// import { Link } from 'react-router-dom'
import './MainBody.css'


function MainBody() {
  return (
<>
<div id="overview" class="inner-panel" >

    <h2 class="regular dark weight-600 caps inline-block float-left fs-5"  style={{textAlign : 'justify'}}>
     OVERVIEW 
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
     </h2>
     <div style={{padding:"20px 0px 20px 0px"}}>
     <h3>Welcome to the ultimate innovation challenge of the year, the CyientifIQ Innovation League - Global Hackathon 2023!</h3> 
     </div>
    
       <div style={{textAlign : 'justify'}}>
       <p>This exhilarating event brings together brilliant minds from various fields to tackle the most pressing issues of our time.</p> 
       </div>

<p style={{textAlign : 'justify'}}>With three captivating themes - <strong>Designing Digital Enterprises, Building Intelligent Products and Platforms, and Solving Sustainability Challenges</strong>—this year's Hackathon promises to be a platform where technology and creativity converge to shape a better future.&nbsp;</p>
</div>

<div id="overview" class="inner-panel" >

    <h2 className="regular dark weight-600 caps inline-block float-left fs-5"  style={{textAlign : 'justify'}}>
     PRIZES
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
     </h2>
     <div className='fs-6' style={{padding:"20px 0px 20px 0px", textAlign : 'justify'}}>
     <h3>Main Prizes</h3> 
     </div>
    
       <div style={{textAlign : 'justify'}}>
       <p>This exhilarating event brings together brilliant minds from various fields to tackle the most pressing issues of our time.</p> 
       </div>

<p style={{textAlign : 'justify'}}>With three captivating themes - <strong>Designing Digital Enterprises, Building Intelligent Products and Platforms, and Solving Sustainability Challenges</strong>—this year's Hackathon promises to be a platform where technology and creativity converge to shape a better future.&nbsp;</p>
</div>
    

</>
  )
}

export default MainBody
