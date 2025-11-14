import React from "react";

function ImagePopup ({card}) {

  return (
    <>
      <img 
        src={card.link} 
        alt={card.name} 
        className="display__image"
      />
      <p className="display__text">{card.name}</p>
  </>
  );
}

export default ImagePopup;