import React from "react";

function ImagePopup ({card}) {

  return (
    <div className="display__frame">
      <img 
        src={card.link} 
        alt={card.name} 
        className="display__image"
      />
      <p className="display__text">{card.name}</p>
  </div>
  );
}

export default ImagePopup;