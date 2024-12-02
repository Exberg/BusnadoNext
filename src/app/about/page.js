'use client';

import React from 'react';
import about from './about.css';

function About() {
  return (
    <div class = "about-container">
        <h1>About Busnado<br/></h1>      
        <p>This is an Internship project dedicated to Airost.<br/></p>
        <h2>Problem Statement:</h2>
        <p>Bus service in UTM is inconsistent in timing and is frequently off 
          schedule causing delay in students plans and wastage of time while waiting 
          for the bus to arrive. Secondly, the locations of bus stops in the bus schedule 
          and where these locations are, are not clearly stated causing much confusion 
          among students especially newcomers.<br />
        </p>
        <h2>Solution:</h2>
        <p>Our solution is an app that shows real-time location of each bus 
          using GPS and the next stop on their route. The app will also have 
          an interactive map feature that displays the UTM landmarks and the 
          location short forms such as CP and PKU used in bus fleet schedules. 
          On the map, there are landmark icons that can be pressed and it will 
          show possible routes to reach the location (including which bus to take). 
          To ensure the bus schedule is constantly updated, we would collaborate with 
          the UTM bus fleet to improve overall performance of UTM bus services.<br/>
        </p>
        <h2>Contact Us</h2>
        <p>Tel : 011-12345678<br/>
          Email: <a href="mailto:BusnadoUTM@gmail.com">BusnadoUTM@gmail.com</a>
          </p>
    </div>
  );
}

export default About;