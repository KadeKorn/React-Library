import React from "react";
//this component makes it so we dont have to make three of those hightlight pages


const highlight = ({icon, title, para}) => {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {icon}
      </div>
      <h3 className="highlight__subtitle">{title}</h3>
      <p className="highlight__para">
        {para}
      </p>
    </div>
  );
}

export default highlight;
