import React from 'react'
import "./Reasons.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";

function Reasons() {
  return (
    <div className="Reasons" id="reasons">
    <div className="left-r">
      <img src={image1} alt=""></img>
      <img src={image2} alt=""></img>
      <img src={image3} alt=""></img>
      <img src={image4} alt=""></img>
    </div>
    <div className="right-r">
      <span>Not motivated yet?</span>
      <div>
        <span className="stroke-text">HERE ARE A FEW reasons </span>
        <span className="stroke-text"> for you to exercise</span>
      </div>
      <div className="details-r">
        <div>
          <span>Improve mental health</span>
        </div>
        <div>
          <span>Manage weight</span>
        </div>
        <div>
          <span>strengthen bones and muscles</span>
        </div>
        <div>
          <span>Increase life expectancy</span>
        </div>
        <div>
          <span>Reduce your risk of cancer</span>
        </div>
        <div>
          <span>Improve your sleep</span>
        </div>
        <div>
          <span>Help your body manage blood sugar and insulin levels</span>
        </div>
        <div>
          <span>Help quit smoking</span>
        </div>
      </div>
    </div>
  </div>
);
};

export default Reasons
