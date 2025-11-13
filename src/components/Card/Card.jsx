import React from "react";

function Card ({card}) {

  const { name, link, isLiked } = card;

  return (

    <li className="card"> {/*Clase anterior elements__frame*/}
      <img 
        src={link} 
        alt={name} 
        className="card__image" /*Clase anterior elements__image*/
      />

      <button 
        className="card__delete-button" /*Clase anterior elements__trash-button*/
        type="button"
        aria-label="Delete card"> 
        <img 
          src="./images/Trash_Button.png"
          alt="botón eliminar activado"
        />
      </button>

      <div className="card__description">

        <h2 className="card__title">{name}</h2> {/*Clase anterior elements__text*/}

        <button 
          className="card__like-button" /*Clase anterior elements__black-button*/
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