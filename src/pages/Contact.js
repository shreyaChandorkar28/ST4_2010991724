import React from "react";
import { ReactDOM } from "react";
import contactI from "../contactimg.jpg";
import "./Contact.css";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
function Contact(){
    return(
        <div className="contact">
            <div className="aboutTop" style={{ backgroundImage: `url(${contactI})` }}></div>
            <div className="aboutBottom">
        <h1> Contact Us</h1>
        <br/>
        <h2>You can contact us...</h2>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109743.01958078149!2d76.70938005820312!3d30.733314800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1665047634456!5m2!1sen!2sin" width="1000px" height="450"></iframe>
        </div>
      </div>
      
        </div>
    );
}

// export default Contact;

export default Contact;