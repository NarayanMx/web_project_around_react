import React from "react";
import ImagePopup from "../ImagePopup/ImagePopup";

function Card ({card, handleOpenPopup}) {

  const { name, link, isLiked } = card;

  const imageComponent = {
    title: null,
    children: <ImagePopup card={card} />
  };

  return (

    <li className="card"> 
      <img 
        src={link} 
        alt={name} 
        className="card__image"
        onClick={() => handleOpenPopup(imageComponent)} 
      />

      <button 
        className="card__delete-button" 
        aria-label="Delete card"> 
        <img 
          src="./images/Trash_Button.png"
          alt="botón eliminar activado"
        />
      </button>

      <div className="card__description">

        <h2 className="card__title">{name}</h2>

        <button 
          className="card__like-button" 
          aria-label="Like card">  
          <img 
            src="./images/like_off.jpg" 
            alt="botón me gusta" 
          />
        </button>
      </div>
    </li>

  );
}

export default Card;