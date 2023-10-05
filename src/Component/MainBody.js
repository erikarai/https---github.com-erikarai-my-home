import React, {useState, useContext, addEventListener} from 'react'
// import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sidebar.css"
import { Link } from 'react-router-dom'
import './MainBody.css'
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Typography } from '@mui/material';


function MainBody() {

  return (
<>
<div id="overview" className="inner-panel" >

    <h2 className="regular dark weight-600 caps inline-block float-left fs-5"  style={{textAlign : 'justify'}}>
       
     OVERVIEW 
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
     </h2>
     <div style={{padding:"20px 0px 20px 0px"}}>
     <h3>Welcome to the ultimate innovation challenge of the year, the Incedo Innovation League - Hackathon 2023!</h3> 
     </div>
    
       <div style={{textAlign : 'justify'}}>
       <p>This exhilarating event brings together brilliant minds from various fields to tackle the most pressing issues of our time.</p> 
       </div>

<p style={{textAlign : 'justify'}}>With three captivating themes - <strong>Designing Digital Enterprises, Building Intelligent Products and Platforms, and Solving Sustainability Challenges</strong>—this year's Hackathon promises to be a platform where technology and creativity converge to shape a better future.&nbsp;</p>
</div>

<div id="prize" className="inner-panel" >

    <h2 className="regular dark weight-600 caps inline-block float-left fs-5"  style={{textAlign : 'justify', padding:"30px 0px 0px 0px"}}>
     <b>PRIZES</b>
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
     </h2>
     <div className='fs-6' style={{padding:"20px 0px 20px 0px", textAlign : 'justify'}}>
     <h5 style={{ color: 'grey' }}>Main Prizes</h5> 
     </div>
    <h5  style={{textAlign : 'justify'}}><b>Grand Prize :</b> <h6 style={{ color: 'grey' }}>USD 10000</h6></h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>The grand prize, reserved for the ultimate champion of the Incedo Innovation League: Global Hackathon, encompasses the following rewards:</li>
        <li>A Cash reward of $10,000.</li>
        <li>We will celebrate your win on multiple social media channels.</li>
        <li>An Exclusive mentoring session with Incedo CTO.</li>
        <li>We will celebrate your win on multiple social media channels.</li>
        <li>An Opportunity to showcase the winning solution at a LinkedIn Live Session hosted by Incedo.</li>
      </ul>
    </Typography>

    <h5  style={{textAlign : 'justify'}}><b>Incedo Champion :</b> <h6 style={{ color: 'grey' }}>USD 5000</h6></h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>One dedicated prize honoring the team or individual whose overall solution demonstrates unparalleled originality, uniqueness, and visionary thinking.</li>
        <li>A Cash reward of $5,000.</li>
        <li>We will celebrate your win on multiple social media channels.</li>
        <li>An Exclusive mentoring session with Incedo CTO.</li>
        <li>An Opportunity to showcase the winning solution at a LinkedIn Live Session hosted by Incedo.</li>
      </ul>
    </Typography>

    <h5  style={{textAlign : 'justify'}}><b>High Potential :</b> <h6 style={{ color: 'grey' }}>USD 3000</h6></h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>The prize will be awarded to the team or individual whose solution demonstrates the greatest potential for success and impact.</li>
        <li>A Cash reward of $3,000.</li>
        <li>We will celebrate your win on multiple social media channels.</li>
        <li>An Exclusive mentoring session with Incedo CTO.</li>
        <li>An Opportunity to showcase the winning solution at a LinkedIn Live Session hosted by Incedo.</li>
      </ul>
    </Typography>
</div>
<div id="overview" class="inner-panel" >

<h2 className="regular dark weight-600 caps inline-block float-left fs-5"  style={{textAlign : 'justify', padding:"20px 0px 0px 0px"}}>
 <b> RULES</b>
    <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
 </h2>
 
<Typography component="div">
  <ul style={{textAlign : 'justify'}}>
    <li>This is an online hackathon, and you may participate from anywhere.</li>
    <li>Registration is open for both individuals and teams of up to five (5) members. If you would like to join a team, you have two options available: invite friends to form your team or browse registered participants (located in the Teams Tab) and request to join a team.</li>
  <p><b>*Once the Ideation phase ends, you may not join another team.</b></p>
  <li >The hackathon will be held online. The hackathon Ideation phase starts on September 29, 2023, at 12:40 pm PDT and ends on October 16, 2023, at 11:55 pm PDT. Judging Ideation phase with an announcement on October 23, 2023, at 9 am PDT on teams that will move forward to the development phase. The development phase starts on October 23, 2023, at 9 am PDT and ends on November 19, 2023, at 5 pm PDT. Winners will be announced on December 7, 2023, at 9 am PDT.</li>
  <p style={{padding:"20px 0px 20px 0px"}}>In the Ideation phase, your team will be required to submit an idea as specified for this phase. The submissions will undergo evaluation, and to progress to the Development phase, your team must attain a score of 70 points or higher. This score will determine your eligibility to proceed to the next phase.</p>
  </ul>
</Typography>

<Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>There are 3 themes for the hackathon, and participants must submit a hack that falls under one of these themes.</li>
        <li>Participants can submit their hack as many times as they want, and the last hack will be considered as the final submission.</li>
        <li>Participants must come up with new and innovative ideas, and any copied idea will be disqualified.</li>
        <li>The hack must be developed entirely during the Hackathon duration.</li>
        <li>Participants can use freely available systems and open-source libraries.</li>
      </ul>
    </Typography>
</div>

<div id="prize" className="inner-panel" >

    <h2 className="regular dark weight-600 caps inline-block float-left fs-5"  style={{textAlign : 'justify', padding:"30px 0px 0px 0px"}}>
     <b>SUBMISSION GUIDELINE</b>
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
     </h2>
     <div className='fs-6' style={{padding:"20px 0px 20px 0px", textAlign : 'justify'}}>
     <h5 style={{ color: 'grey' }}>Main Prizes</h5> 
     </div>
    <h5  style={{textAlign : 'justify'}}><b>Grand Prize :</b> <h6 style={{ color: 'grey' }}>USD 10000</h6></h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>The grand prize, reserved for the ultimate champion of the Incedo Innovation League: Global Hackathon, encompasses the following rewards:</li>
        <li>A Cash reward of $10,000.</li>
        <li>We will celebrate your win on multiple social media channels.</li>
        <li>An Exclusive mentoring session with Incedo CTO.</li>
        <li>We will celebrate your win on multiple social media channels.</li>
        <li>An Opportunity to showcase the winning solution at a LinkedIn Live Session hosted by Incedo.</li>
      </ul>
    </Typography>

    <h5  style={{textAlign : 'justify'}}><b>Incedo Champion :</b> <h6 style={{ color: 'grey' }}>USD 5000</h6></h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>One dedicated prize honoring the team or individual whose overall solution demonstrates unparalleled originality, uniqueness, and visionary thinking.</li>
        <li>A Cash reward of $5,000.</li>
        <li>We will celebrate your win on multiple social media channels.</li>
        <li>An Exclusive mentoring session with Incedo CTO.</li>
        <li>An Opportunity to showcase the winning solution at a LinkedIn Live Session hosted by Incedo.</li>
      </ul>
    </Typography>

    <h5  style={{textAlign : 'justify'}}><b>High Potential :</b> <h6 style={{ color: 'grey' }}>USD 3000</h6></h5>
    <Typography component="div">
      <ul style={{textAlign : 'justify'}}>
        <li>The prize will be awarded to the team or individual whose solution demonstrates the greatest potential for success and impact.</li>
        <li>A Cash reward of $3,000.</li>
        <li>We will celebrate your win on multiple social media channels.</li>
        <li>An Exclusive mentoring session with Incedo CTO.</li>
        <li>An Opportunity to showcase the winning solution at a LinkedIn Live Session hosted by Incedo.</li>
      </ul>
    </Typography>
</div>

</>
  )
}

export default MainBody
