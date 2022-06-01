import React from "react";
import './landing.css'
import hr2 from "./img/hr2.jpg"

function Landing(){
return(
    <div id="landing--cnt">
        <img src={hr2} alt='logo' id="landing--img" />
        <div id="landing--pg"><p>Features: Create, view, edit and delete entries</p>
        </div>
        <div id='landing--card'>
    <p>
        <span id='card--title'>How to use:</span>
        <p id='card--paragraph'>
            1.Click on +add employee to add a new entry <br></br>
            2.Click on employees to view all entries <br></br>
            3.Edit and delete functionalities provided in employees page <br></br>
            4.Note that while editing an entry make sure to re-entry all fields and make sure 
            that the UID is same as the original to avoid database error
        </p>
    </p>
</div>  
  </div>
)
}

export default Landing