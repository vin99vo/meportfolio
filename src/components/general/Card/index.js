import React from "react";
import "./Card.css";

const Card=({classes, children}) =>{
  return <div className={`card-container ${classes}`}>{children}</div>;
}

export default Card;
