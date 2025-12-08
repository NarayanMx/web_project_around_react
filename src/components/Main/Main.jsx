import React from "react";
import { useState, useEffect, useContext } from "react";
import Popup from "./Popup/Popup.jsx";
import NewCard from "./form/NewCard/NewCard.jsx"
import EditProfile from "./form/EditProfile/EditProfile.jsx"
import EditAvatar from "./form/EditAvatar/EditAvatar.jsx"
import Profile from "../Profile/Profile";
import Card from "../Card/Card.jsx";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";
import api from "../../utils/api.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function Main() {

    const [popup, setPopup] = useState(null);
 
    const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
    const editProfilePopup = { title: "Editar Perfíl", children: <EditProfile /> };
    const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

    const handleClosePopup = () => {
    setPopup(null);
    };

    const handleOpenPopup = (popup) => {
    setPopup(popup);
    };

    const [cards, setCards] = useState([])

    useEffect(() => {
      api.getInitialCards ()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((error) => {
        console.error("Error al obtener las tarjetas:", error);
      });
    }, []);

    const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <Profile onOpenPopup={handleOpenPopup}
      newCardPopup={newCardPopup}
      editProfilePopup={editProfilePopup}
      editAvatarPopup={editAvatarPopup}
       />    

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
          <Card 
          key={card._id} 
          card={card} 
          handleOpenPopup={handleOpenPopup}/>
          ))}
        </ul>
      </section>

      {popup && (
      <Popup onClose={handleClosePopup} title={popup.title}>
      {popup.children}
      </Popup>
      )}    
 
    </>
  );
}

export default Main;
