//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

//generate hour of day as a number 0-23
const today = new Date();
const hourOfDay = today.getHours();

//create greeting variable
let greeting;

//define a style variable as JS object
const customStyle = {
  color: ""
};

//change words and color of greeting depending on hour of day
if (hourOfDay < 12) {
  greeting = "morning";
  customStyle.color = "red";
} else if (hourOfDay < 18) {
  greeting = "afternoon";
  customStyle.color = "green";
} else {
  greeting = "night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    Good {greeting}!
  </h1>,
  document.getElementById("root")
);
