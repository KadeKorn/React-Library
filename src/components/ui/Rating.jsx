import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
  // ({rating}) is an ES6 --> Destructuring an obj to get exactly what you want
  return (
    <div className="book__ratings"> 
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
// new Array and Math.floor are being used to create an array of a length that corresponds to the floored value of rating.
// the .fill(0) is to fill all elements of the array with 0 so that tge map function can do its thing. In JS empty slots cannot
// be mapped over, so we beed to fill them
// Fill(0) is becuase we are creating a new array with the length of Rating it creates an empty array with the length of that 
//floored rating IE new array(5) // creates an array of 5 empty slots
        <FontAwesomeIcon icon="star" key={index} />
      ))}
      {!Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-alt" />}
    </div>
  );
};

export default Rating;
