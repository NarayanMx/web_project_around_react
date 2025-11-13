import React from "react";

function Card ({ card}) {
  return (

    <section className="elements">

      <div className="elements__frame"> 
        <img 
          src={card.link} 
          alt={card.name} 
          className="elements__image"
        />
        <p className="elements__text">{card.name}</p>

        <button className="elements__trash-button" type="button"> 
          <img 
            src="./images/Trash_Button.png"
            alt="botón eliminar activado"
          />
        </button>

        <button className="elements__black-button">  
          <img 
            src="./images/like_on.png" 
            alt="botón me gusta activado" 
          />
        </button>

        <button className="elements__like-button" type="button">  
          <img 
            src="./images/like_off.jpg" 
            alt="botón me gusta desactivado" 
          />
        </button>
      </div>

    </section>

  );
}

export default Card;