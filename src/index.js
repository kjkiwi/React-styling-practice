//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const today = new Date();
const hourOfDay = today.getHours();

if (hourOfDay < 12) {
  greeting = "morning";
} else if (hourOfDay >= 12 && hourOfDay < 18) {
  greeting = "afternoon";
} else if (hourOfDay >= 18 && hourOfDay < 24) {
  greeting = "night";
}

ReactDOM.render(
  <h1 className="heading"> Good {greeting}!</h1>,
  document.getElementById("root")
);
